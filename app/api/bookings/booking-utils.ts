export type BookingPayload = {
  name: string;
  phone: string;
  email: string;
  services: string[];
  date: string;
  time: string;
  claimedOffer: boolean;
};

function sanitize(input: string) {
  return input.trim().replace(/\s+/g, " ");
}

export function validateBookingPayload(input: BookingPayload) {
  const name = sanitize(input.name);
  const phone = sanitize(input.phone);
  const email = sanitize(input.email).toLowerCase();
  const services = Array.isArray(input.services)
    ? input.services.map((service) => sanitize(service)).filter(Boolean)
    : [];
  const date = input.date;
  const time = input.time;
  const claimedOffer = Boolean(input.claimedOffer);

  if (!name || !phone || !email || services.length === 0 || !date || !time) {
    return { ok: false as const, error: "Please fill out all fields." };
  }

  if (name.length < 2) {
    return { ok: false as const, error: "Name must be at least 2 characters." };
  }

  if (!/^\+?[0-9()\-\s]{10,20}$/.test(phone)) {
    return { ok: false as const, error: "Please enter a valid phone number." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false as const, error: "Please enter a valid email address." };
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return { ok: false as const, error: "Please choose a valid date." };
  }

  if (!/^\d{2}:\d{2}$/.test(time)) {
    return { ok: false as const, error: "Please choose a valid time." };
  }

  return {
    ok: true as const,
    value: { name, phone, email, services, date, time, claimedOffer },
  };
}
