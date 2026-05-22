import { NextResponse } from "next/server";
import { validateBookingPayload } from "./booking-utils";

type SupabaseInsertResponse = {
  id?: string;
};

async function sendConfirmationEmail(params: {
  toEmail: string;
  customerName: string;
  services: string[];
  date: string;
  time: string;
  couponCode?: string;
}) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.BOOKING_FROM_EMAIL;

  if (!resendApiKey || !fromEmail) {
    return;
  }

  const subject = `Lovely Nails booking confirmation - ${params.date} at ${params.time}`;
  const couponLine = params.couponCode
    ? `Coupon code applied: ${params.couponCode}`
    : "Coupon code applied: None";
  const serviceLines = params.services
    .map((service) => `<li>${service}</li>`)
    .join("");
  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.5;">
      <h2>Thanks for booking with Lovely Nails</h2>
      <p>Hi ${params.customerName}, your request has been received.</p>
      <p><strong>Services:</strong></p>
      <ul>${serviceLines}</ul>
      <p><strong>Date:</strong> ${params.date}</p>
      <p><strong>Time:</strong> ${params.time}</p>
      <p><strong>${couponLine}</strong></p>
      <p>We will contact you shortly to confirm your appointment details.</p>
    </div>
  `;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [params.toEmail],
        subject,
        html,
      }),
    });
  } catch {
    // Keep booking flow successful even if email provider has a temporary issue.
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body) {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const parsed = validateBookingPayload({
    name: body.name ?? "",
    phone: body.phone ?? "",
    email: body.email ?? "",
    services: body.services ?? [],
    date: body.date ?? "",
    time: body.time ?? "",
    couponCode: body.couponCode ?? "",
  });

  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json(
      { error: "Server is missing Supabase environment variables." },
      { status: 500 },
    );
  }

  const appointmentDate = new Date(`${parsed.value.date}T12:00:00-04:00`);
  const reminderAt = new Date(
    appointmentDate.getTime() - 24 * 60 * 60 * 1000,
  ).toISOString();

  const insertPayload = {
    customer_name: parsed.value.name,
    customer_phone: parsed.value.phone,
    customer_email: parsed.value.email,
    requested_service: parsed.value.services.join(", "),
    requested_date: parsed.value.date,
    requested_time: parsed.value.time,
    claimed_offer: Boolean(parsed.value.couponCode),
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
      { status: 500 },
    );
  }

  const inserted = (await response.json()) as SupabaseInsertResponse[];

  await sendConfirmationEmail({
    toEmail: parsed.value.email,
    customerName: parsed.value.name,
    services: parsed.value.services,
    date: parsed.value.date,
    time: parsed.value.time,
    couponCode: parsed.value.couponCode,
  });

  return NextResponse.json({
    ok: true,
    bookingId: inserted[0]?.id ?? null,
    message: "Booking request submitted successfully.",
  });
}
