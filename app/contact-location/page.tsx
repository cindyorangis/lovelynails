import type { Metadata } from "next";
import { buildTitle, localDescription, siteConfig } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Contact & Location"),
  description: localDescription("Contact details and location"),
};

export default function ContactLocationPage() {
  return (
    <div className="container page-stack">
      <h1>Contact & Location</h1>
      <p>
        Find Lovely Nails in North York, Ontario and reach us quickly for
        appointments.
      </p>
      <div className="card-grid">
        <article className="card">
          <h2>Address</h2>
          <p>{siteConfig.address.streetAddress}</p>
          <p>
            {siteConfig.address.addressLocality},{" "}
            {siteConfig.address.addressRegion} {siteConfig.address.postalCode}
          </p>
        </article>
        <article className="card">
          <h2>Phone</h2>
          <p>{siteConfig.phone}</p>
          <h2>Email</h2>
          <p>{siteConfig.email}</p>
        </article>
      </div>
      <section className="card">
        <h2>Hours</h2>
        <ul>
          {siteConfig.hours.map((hour) => (
            <li key={hour}>{hour}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
