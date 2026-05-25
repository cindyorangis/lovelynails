"use client";

import { useState, useMemo } from "react";
import { activePromotions } from "../../site-data";
import {
  buildServiceValue,
  serviceCategories,
} from "../../services/services-data";

// ── Types ────────────────────────────────────────────────────────
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

// ── Business hours ───────────────────────────────────────────────
const BUSINESS_HOURS: Record<number, { open: string; close: string } | null> = {
  0: { open: "10:00", close: "17:00" },
  1: { open: "09:30", close: "19:30" },
  2: { open: "09:30", close: "19:30" },
  3: { open: "09:30", close: "19:30" },
  4: { open: "09:30", close: "19:30" },
  5: { open: "09:30", close: "19:30" },
  6: { open: "09:30", close: "18:30" },
};

function generateTimeSlots(
  open: string,
  close: string,
): Array<{ value: string; label: string }> {
  const slots: Array<{ value: string; label: string }> = [];
  const [openH, openM] = open.split(":").map(Number);
  const [closeH, closeM] = close.split(":").map(Number);
  const openMinutes = openH * 60 + openM;
  const closeMinutes = closeH * 60 + closeM;

  for (let m = openMinutes; m < closeMinutes; m += 15) {
    const h = Math.floor(m / 60);
    const min = m % 60;
    slots.push({
      value: `${String(h).padStart(2, "0")}:${String(min).padStart(2, "0")}`,
      label: new Date(0, 0, 0, h, min).toLocaleTimeString("en-CA", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    });
  }
  return slots;
}

// ── Promo badge helper ───────────────────────────────────────────
const VALID_CODES = new Set(
  activePromotions.map((p) => p.couponCode.toUpperCase()),
);

function PromoMatch({ code }: { code: string }) {
  const upper = code.toUpperCase();
  if (!upper) return null;
  const promo = activePromotions.find(
    (p) => p.couponCode.toUpperCase() === upper,
  );
  if (promo) {
    return (
      <p className="booking-coupon-match booking-coupon-match--valid">
        ✓ {promo.headline}
      </p>
    );
  }
  if (upper.length >= 3) {
    return (
      <p className="booking-coupon-match booking-coupon-match--invalid">
        Code not recognised
      </p>
    );
  }
  return null;
}

// ── Component ────────────────────────────────────────────────────
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
  const [openCategories, setOpenCategories] = useState<Set<string>>(
    () => new Set(serviceCategories.map((c) => c.title)),
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{
    type: "ok" | "error";
    message: string;
  } | null>(null);

  const timeSlots = useMemo(() => {
    if (!form.date) return [];
    const [y, mo, d] = form.date.split("-").map(Number);
    const dow = new Date(y, mo - 1, d).getDay();
    const hours = BUSINESS_HOURS[dow];
    if (!hours) return [];
    return generateTimeSlots(hours.open, hours.close);
  }, [form.date]);

  const today = new Date().toISOString().split("T")[0];

  const selectedCount = form.services.length;

  function toggleService(value: string) {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(value)
        ? prev.services.filter((s) => s !== value)
        : [...prev.services, value],
    }));
  }

  function toggleCategory(title: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(title) ? next.delete(title) : next.add(title);
      return next;
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
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

  // ── Success screen ─────────────────────────────────────────────
  if (result?.type === "ok") {
    return (
      <div className="booking-success" role="status" aria-live="polite">
        <div className="booking-success__icon" aria-hidden="true">
          ✓
        </div>
        <h2>You're booked in!</h2>
        <p>{result.message}</p>
        <button className="btn btn-secondary" onClick={() => setResult(null)}>
          Make another booking
        </button>
      </div>
    );
  }

  return (
    <form
      className="booking-form"
      aria-label="Appointment request form"
      onSubmit={handleSubmit}
    >
      {/* ── Step 1: Personal details ─────────────────────────── */}
      <fieldset className="booking-fieldset">
        <legend className="booking-legend">
          <span className="booking-legend__step">1</span>
          Your details
        </legend>
        <div className="booking-fields-row">
          <label className="booking-label">
            Full name
            <input
              type="text"
              name="name"
              placeholder="Jane Smith"
              value={form.name}
              autoComplete="name"
              required
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            />
          </label>
          <label className="booking-label">
            Phone number
            <input
              type="tel"
              name="phone"
              placeholder="(416) 555-0188"
              value={form.phone}
              autoComplete="tel"
              required
              onChange={(e) =>
                setForm((p) => ({ ...p, phone: e.target.value }))
              }
            />
          </label>
        </div>
        <label className="booking-label">
          Email address
          <input
            type="email"
            name="email"
            placeholder="jane@example.com"
            value={form.email}
            autoComplete="email"
            required
            onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
          />
        </label>
      </fieldset>

      {/* ── Step 2: Date & time ──────────────────────────────── */}
      <fieldset className="booking-fieldset">
        <legend className="booking-legend">
          <span className="booking-legend__step">2</span>
          Date &amp; time
        </legend>
        <div className="booking-fields-row">
          <label className="booking-label">
            Preferred date
            <input
              type="date"
              name="date"
              value={form.date}
              min={today}
              required
              onChange={(e) =>
                setForm((p) => ({ ...p, date: e.target.value, time: "" }))
              }
            />
          </label>
          <label className="booking-label">
            Preferred time
            <select
              name="time"
              value={form.time}
              required
              disabled={timeSlots.length === 0}
              onChange={(e) => setForm((p) => ({ ...p, time: e.target.value }))}
            >
              <option value="">
                {!form.date
                  ? "Pick a date first"
                  : timeSlots.length === 0
                    ? "Closed that day"
                    : "Select a time"}
              </option>
              {timeSlots.map((slot) => (
                <option key={slot.value} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <p className="booking-hours-note muted-note">
          Mon–Fri 9:30 am – 7:30 pm · Sat 9:30 am – 6:30 pm · Sun 10:00 am –
          5:00 pm
        </p>
      </fieldset>

      {/* ── Step 3: Services ─────────────────────────────────── */}
      <fieldset className="booking-fieldset">
        <legend className="booking-legend">
          <span className="booking-legend__step">3</span>
          Services
          {selectedCount > 0 && (
            <span className="booking-legend__badge">
              {selectedCount} selected
            </span>
          )}
        </legend>
        <p className="muted-note" style={{ marginBottom: "1rem" }}>
          Select everything you'd like for this visit.
        </p>

        <div className="booking-categories">
          {serviceCategories.map((category) => {
            const isOpen = openCategories.has(category.title);
            const selectedInCategory = category.items.filter((item) =>
              form.services.includes(
                buildServiceValue(category.title, item.name),
              ),
            ).length;

            return (
              <div key={category.title} className="booking-category">
                <button
                  type="button"
                  className="booking-category__toggle"
                  aria-expanded={isOpen}
                  onClick={() => toggleCategory(category.title)}
                >
                  <span className="booking-category__title">
                    {category.title}
                  </span>
                  <span className="booking-category__meta">
                    {selectedInCategory > 0 && (
                      <span className="booking-category__count">
                        {selectedInCategory}
                      </span>
                    )}
                    <span
                      className="booking-category__chevron"
                      aria-hidden="true"
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      ▾
                    </span>
                  </span>
                </button>

                {isOpen && (
                  <div className="booking-category__items">
                    {category.items.map((item) => {
                      const value = buildServiceValue(
                        category.title,
                        item.name,
                      );
                      const checked = form.services.includes(value);

                      return (
                        <label
                          key={value}
                          className={`service-check${checked ? " service-check--checked" : ""}`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(value)}
                          />
                          <span className="service-check__name">
                            {item.name}
                          </span>
                          <span className="service-check__price">
                            {item.price}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>

      {/* ── Step 4: Coupon ───────────────────────────────────── */}
      <fieldset className="booking-fieldset">
        <legend className="booking-legend">
          <span className="booking-legend__step">4</span>
          Promo code{" "}
          <span className="booking-legend__optional">(optional)</span>
        </legend>
        <label className="booking-label">
          Coupon code
          <input
            type="text"
            name="couponCode"
            placeholder="e.g. WEEKDAY20"
            value={form.couponCode}
            onChange={(e) =>
              setForm((p) => ({
                ...p,
                couponCode: e.target.value.toUpperCase().trim(),
              }))
            }
          />
        </label>
        <PromoMatch code={form.couponCode} />
      </fieldset>

      {/* ── Submit ───────────────────────────────────────────── */}
      {result?.type === "error" && (
        <p className="booking-error" role="alert">
          {result.message}
        </p>
      )}

      <button
        type="submit"
        className="btn btn-primary booking-submit"
        disabled={isSubmitting || selectedCount === 0}
      >
        {isSubmitting ? "Submitting…" : "Request Appointment"}
      </button>

      {selectedCount === 0 && (
        <p className="muted-note" style={{ textAlign: "center" }}>
          Select at least one service to continue.
        </p>
      )}
    </form>
  );
}
