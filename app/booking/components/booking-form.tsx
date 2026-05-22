"use client";

import { useState, useMemo } from "react";
import { activePromotions } from "../../site-data";
import {
  buildServiceValue,
  serviceCategories,
} from "../../services/services-data";

type FormState = {
  name: string;
  phone: string;
  email: string;
  services: string[];
  date: string;
  time: string;
  couponCode: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  services: [],
  date: "",
  time: "",
  couponCode: "",
};

// Business hours per day of week (0 = Sunday)
const BUSINESS_HOURS: Record<number, { open: string; close: string } | null> = {
  0: { open: "10:00", close: "17:00" }, // Sunday
  1: { open: "09:30", close: "19:30" }, // Monday
  2: { open: "09:30", close: "19:30" }, // Tuesday
  3: { open: "09:30", close: "19:30" }, // Wednesday
  4: { open: "09:30", close: "19:30" }, // Thursday
  5: { open: "09:30", close: "19:30" }, // Friday
  6: { open: "09:30", close: "18:30" }, // Saturday
};

function generateTimeSlots(open: string, close: string): string[] {
  const slots: string[] = [];
  const [openH, openM] = open.split(":").map(Number);
  const [closeH, closeM] = close.split(":").map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  for (let m = openMinutes; m < closeMinutes; m += 15) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    const label = new Date(0, 0, 0, h, min).toLocaleTimeString("en-CA", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
    const value = `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`;
    slots.push(value + "|" + label);
  }

  return slots;
}

type BookingFormProps = {
  initialServices?: string[];
};

export default function BookingForm({
  initialServices = [],
}: BookingFormProps) {
  const [form, setForm] = useState<FormState>({
    ...initialState,
    services: initialServices,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "ok" | "error";
    message: string;
  } | null>(null);

  // Derive available time slots from selected date
  const timeSlots = useMemo(() => {
    if (!form.date) return [];
    // Parse as local date (YYYY-MM-DD) without timezone shift
    const [y, mo, d] = form.date.split("-").map(Number);
    const dayOfWeek = new Date(y, mo - 1, d).getDay();
    const hours = BUSINESS_HOURS[dayOfWeek];
    if (!hours) return [];
    return generateTimeSlots(hours.open, hours.close);
  }, [form.date]);

  // Minimum selectable date = today
  const today = new Date().toISOString().split("T")[0];

  function toggleService(value: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((item) => item !== value)
        : [...prev.services, value],
    }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        setResult({
          type: "error",
          message: data.error ?? "Something went wrong.",
        });
        return;
      }

      setResult({ type: "ok", message: data.message ?? "Request submitted." });
      setForm(initialState);
    } catch {
      setResult({ type: "error", message: "Network error. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="booking-form booking-form-wide"
      aria-label="Appointment request form"
      onSubmit={handleSubmit}
    >
      <label>
        Full Name
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
          }
          required
        />
      </label>
      <label>
        Phone Number
        <input
          type="tel"
          name="phone"
          placeholder="(416) 555-0188"
          value={form.phone}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, phone: event.target.value }))
          }
          required
        />
      </label>
      <label>
        Email Address
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          required
        />
      </label>

      {/* Date + Time grouped together, before the long services list */}
      <label>
        Preferred Date
        <input
          type="date"
          name="date"
          value={form.date}
          min={today}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              date: event.target.value,
              time: "", // reset time when date changes
            }))
          }
          required
        />
      </label>

      <label>
        Preferred Time
        <select
          name="time"
          value={form.time}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, time: event.target.value }))
          }
          required
          disabled={timeSlots.length === 0}
        >
          <option value="">
            {form.date
              ? timeSlots.length === 0
                ? "Closed that day"
                : "Select a time"
              : "Pick a date first"}
          </option>
          {timeSlots.map((slot) => {
            const [value, label] = slot.split("|");
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
      </label>

      <section
        className="card booking-service-select"
        aria-label="Select one or more services"
      >
        <h2>Select Services</h2>
        <p className="muted-note">
          Tap all services you want for this appointment.
        </p>

        <div className="booking-service-groups">
          {serviceCategories.map((category) => (
            <div key={category.title} className="booking-service-group">
              <h3>{category.title}</h3>
              <div className="booking-service-items">
                {category.items.map((item) => {
                  const value = buildServiceValue(category.title, item.name);
                  const checked = form.services.includes(value);

                  return (
                    <label key={value} className="service-check">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleService(value)}
                      />
                      <span>
                        {item.name} ({item.price})
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <label>
        Coupon Code
        <input
          type="text"
          name="couponCode"
          placeholder="Enter coupon code"
          value={form.couponCode}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              couponCode: event.target.value.toUpperCase().trim(),
            }))
          }
        />
      </label>

      {activePromotions.length > 0 ? (
        <div className="card promo-code-list">
          <h2>Available Promo Codes</h2>
          {activePromotions.map((promo) => (
            <p key={promo.id}>
              <strong>{promo.couponCode}</strong> - {promo.headline}
            </p>
          ))}
        </div>
      ) : null}

      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>
      {result ? <p role="status">{result.message}</p> : null}
    </form>
  );
}
