import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";
import { serviceCategories } from "./services-data";

export const metadata: Metadata = {
  title: buildTitle("Nail Services"),
  description: localDescription(
    "Manicure, pedicure, waxing, and nail art services",
  ),
};

export default function ServicesPage() {
  return (
    <div className="container page-stack">
      <h1>Services</h1>
      <p>
        Browse our full service menu for Lovely Nails in North York. Prices are
        listed in CAD.
      </p>

      <div className="services-category-list">
        {serviceCategories.map((category) => (
          <section key={category.title} className="card service-category">
            <h2>{category.title}</h2>
            <div className="service-items">
              {category.items.map((item) => (
                <article
                  key={`${category.title}-${item.name}`}
                  className="service-item-row"
                >
                  <div>
                    <h3>{item.name}</h3>
                    {item.description ? (
                      <p className="service-desc">{item.description}</p>
                    ) : null}
                  </div>
                  <p className="service-meta">
                    {item.price} | {item.duration} | {item.pricingType}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
