export type BookingPayload = {
  name: string;
  phone: string;
  service: string;
  date: string;
};

function sanitize(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

export function validateBookingPayload(input: BookingPayload) {
  const name = sanitize(input.name);
  const phone = sanitize(input.phone);
  const service = sanitize(input.service);
  const date = input.date;

  if (!name || !phone || !service || !date) {
    return { ok: false as const, error: "Please fill out all fields." };
  }

  if (name.length < 2) {
    return { ok: false as const, error: "Name must be at least 2 characters." };
  }

  if (!/^\+?[0-9()\-\s]{10,20}$/.test(phone)) {
    return { ok: false as const, error: "Please enter a valid phone number." };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { ok: false as const, error: "Please choose a valid date." };
  }

  return {
    ok: true as const,
    value: { name, phone, service, date },
  };
}