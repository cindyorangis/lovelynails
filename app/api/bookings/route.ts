import { NextResponse } from "next/server";
import { validateBookingPayload } from "./booking-utils";

type SupabaseInsertResponse = {
  id?: string;
};

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = validateBookingPayload({
    name: body.name ?? "",
    phone: body.phone ?? "",
    service: body.service ?? "",
    date: body.date ?? "",
  });

  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Server is missing Supabase environment variables." },
      { status: 500 }
    );
  }

  const appointmentDate = new Date(`${parsed.value.date}T12:00:00-04:00`);
  const reminderAt = new Date(appointmentDate.getTime() - 24 * 60 * 60 * 1000).toISOString();

  const insertPayload = {
    customer_name: parsed.value.name,
    customer_phone: parsed.value.phone,
    requested_service: parsed.value.service,
    requested_date: parsed.value.date,
    status: "new",
    sms_opt_in: true,
    reminder_status: "pending",
    next_reminder_at: reminderAt,
  };

  const response = await fetch(`${supabaseUrl}/rest/v1/bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: serviceRoleKey,
      Authorization: `Bearer ${serviceRoleKey}`,
      Prefer: "return=representation",
    },
    body: JSON.stringify(insertPayload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    return NextResponse.json(
      { error: "Could not save booking.", details: errorText },
      { status: 500 }
    );
  }

  const inserted = (await response.json()) as SupabaseInsertResponse[];

  return NextResponse.json({
    ok: true,
    bookingId: inserted[0]?.id ?? null,
    message: "Booking request submitted successfully.",
  });
}