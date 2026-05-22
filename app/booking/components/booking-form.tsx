"use client";

import { useState } from "react";
import { promotion } from "../../site-data";
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
  claimedOffer: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  services: [],
  date: "",
  time: "",
  claimedOffer: promotion.isActive,
};

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
      <label>
        Preferred Time
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, time: event.target.value }))
          }
          required
        />
      </label>
      {promotion.isActive ? (
        <label className="booking-checkbox">
          <input
            type="checkbox"
            name="claimedOffer"
            checked={form.claimedOffer}
            onChange={(event) =>
              setForm((prev) => ({
                ...prev,
                claimedOffer: event.target.checked,
              }))
            }
          />
          <span>
            Apply current offer: <strong>{promotion.headline}</strong>
          </span>
        </label>
      ) : null}
      <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Request Appointment"}
      </button>
      {result ? <p role="status">{result.message}</p> : null}
    </form>
  );
}
