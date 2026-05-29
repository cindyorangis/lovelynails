"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildServiceValue,
  serviceCategories,
  type ServiceCategory,
  type ServiceItem,
} from "../services-data";

const categoryLabels: Record<string, string> = {
  "Artificial Nail": "Nails",
  "Spa Treatments": "Spa",
  "Kids Under 12": "Kids",
  "Bridal & Wedding": "Bridal",
};

const groupLabels: Record<string, string> = {
  "Maintenance & Art": "Add-ons",
  "Standard Care": "Pedicures",
  "Quick Maintenance": "Add-ons",
  "Consultation & Trials": "Consultations",
  "The Big Day (Bride)": "Bride",
  "Wedding Party & Guests": "Wedding Party",
};

function formatPrice(item: ServiceItem) {
  if (item.pricingType === "Complimentary") {
    return "Complimentary";
  }
  return item.pricingType === "From" ? `From ${item.price}` : item.price;
}

function formatCategoryLabel(category: ServiceCategory) {
  return categoryLabels[category.title] ?? category.title;
}

function formatGroupLabel(groupName: string, categoryTitle: string) {
  if (!groupName) {
    return formatCategoryLabel({ title: categoryTitle, items: [] });
  }
  return groupLabels[groupName] ?? groupName;
}

export default function ServicesSelector() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(serviceValue: string) {
    setSelectedServices((prev) =>
      prev.includes(serviceValue)
        ? prev.filter((item) => item !== serviceValue)
        : [...prev, serviceValue],
    );
  }

  const groupedServices = useMemo(() => {
    return activeCategory.items.reduce<Map<string, ServiceItem[]>>(
      (acc, item) => {
        const key = item.subcategory ?? "";
        if (!acc.has(key)) acc.set(key, []);
        acc.get(key)!.push(item);
        return acc;
      },
      new Map(),
    );
  }, [activeCategory]);

  const bookingHref = useMemo(() => {
    const params = new URLSearchParams();
    selectedServices.forEach((service) => params.append("services", service));
    const query = params.toString();
    return query ? `/booking?${query}` : "/booking";
  }, [selectedServices]);

  return (
    <div className="services-menu">
      <div className="services-tabs" aria-label="Service categories">
        {serviceCategories.map((category) => {
          const active = category.title === activeCategory.title;

          return (
            <button
              key={category.title}
              type="button"
              className={`services-tab${active ? " services-tab--active" : ""}`}
              aria-pressed={active}
              onClick={() => setActiveCategory(category)}
            >
              {formatCategoryLabel(category)}
            </button>
          );
        })}
      </div>

      <div className="services-menu-body">
        {Array.from(groupedServices.entries()).map(([groupName, items]) => (
          <section key={groupName} className="services-menu-group">
            <h2>{formatGroupLabel(groupName, activeCategory.title)}</h2>
            <div className="services-card-grid">
              {items.map((item) => {
                const value = buildServiceValue(
                  activeCategory.title,
                  item.name,
                );
                const selected = selectedServices.includes(value);
                const popular = item.name === "Bio-gel Shellac Set";

                return (
                  <button
                    key={value}
                    type="button"
                    className={`services-menu-card${
                      selected ? " services-menu-card--selected" : ""
                    }`}
                    aria-pressed={selected}
                    onClick={() => toggleService(value)}
                  >
                    <span className="services-menu-card__content">
                      {popular ? (
                        <span className="services-popular">most popular</span>
                      ) : null}
                      <span className="services-menu-card__name">
                        {item.name}
                      </span>
                      <span className="services-menu-card__price">
                        {formatPrice(item)}
                      </span>
                    </span>
                    <span className="services-menu-card__duration">
                      {item.duration}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <div className="services-booking-bar">
        <p>
          Selected: <strong>{selectedServices.length} services</strong>
        </p>
        <Link
          className={`services-booking-button${
            selectedServices.length === 0
              ? " services-booking-button--disabled"
              : ""
          }`}
          href={bookingHref}
          aria-disabled={selectedServices.length === 0}
          tabIndex={selectedServices.length === 0 ? -1 : undefined}
        >
          Book appointment
        </Link>
      </div>
    </div>
  );
}
