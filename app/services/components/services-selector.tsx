"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  buildServiceValue,
  serviceCategories,
  type ServiceItem,
} from "../services-data";

function formatPrice(item: ServiceItem) {
  return item.pricingType === "From"
    ? `From ${item.price}`
    : `${item.price} (Fixed)`;
}

export default function ServicesSelector() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(serviceValue: string) {
    setSelectedServices((prev) =>
      prev.includes(serviceValue)
        ? prev.filter((item) => item !== serviceValue)
        : [...prev, serviceValue],
    );
  }

  const bookingHref = useMemo(() => {
    const params = new URLSearchParams();
    selectedServices.forEach((service) => params.append("services", service));
    const query = params.toString();
    return query ? `/booking?${query}` : "/booking";
  }, [selectedServices]);

  return (
    <div className="services-category-list">
      {serviceCategories.map((category) => {
        const grouped = category.items.reduce<Map<string, ServiceItem[]>>(
          (acc, item) => {
            const key = item.subcategory ?? "";
            if (!acc.has(key)) acc.set(key, []);
            acc.get(key)!.push(item);
            return acc;
          },
          new Map(),
        );

        return (
          <section key={category.title} className="card service-category">
            <h2>{category.title}</h2>

            <div className="service-table-head">
              <span>Service Category</span>
              <span>Price</span>
              <span>Duration</span>
            </div>

            <div className="service-table-body">
              {Array.from(grouped.entries()).map(([groupName, items]) => (
                <div key={groupName} className="service-group-block">
                  {groupName ? (
                    <p className="service-group-name">{groupName}</p>
                  ) : null}
                  {items.map((item) => {
                    const value = buildServiceValue(category.title, item.name);
                    const checked = selectedServices.includes(value);

                    return (
                      <article
                        key={value}
                        className="service-item-row service-item-select-row"
                      >
                        <label className="service-select-label">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleService(value)}
                          />
                          <span>
                            <strong>{item.name}</strong>
                            {item.description ? (
                              <span className="service-desc">
                                {item.description}
                              </span>
                            ) : null}
                          </span>
                        </label>
                        <p className="service-meta">{formatPrice(item)}</p>
                        <p className="service-meta">{item.duration}</p>
                      </article>
                    );
                  })}
                </div>
              ))}
            </div>
          </section>
        );
      })}

      <div className="service-select-footer">
        <Link className="btn btn-primary" href={bookingHref}>
          Book These Services ({selectedServices.length})
        </Link>
      </div>
    </div>
  );
}
