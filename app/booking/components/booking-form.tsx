"use client";

import { useState } from "react";

type FormState = {
  name: string;
  phone: string;
  service: string;
  date: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "",
  date: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "ok" | "error";
    message: string;
  } | null>(null);

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
      className="booking-form"
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
        Service
        <input
          type="text"
          name="service"
          placeholder="Gel manicure"
          value={form.service}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, service: event.target.value }))
          }
          required
        />
      </label>
      <label>
        Preferred Date
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, date: event.target.value }))
          }
          required
        />
      </label>
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>
      {result ? <p role="status">{result.message}</p> : null}
    </form>
  );
}
