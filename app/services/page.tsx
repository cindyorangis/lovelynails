import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Nail Services"),
  description: localDescription("Manicure, pedicure, and nail art services"),
};

const services = [
  { name: "Classic Manicure", time: "35 min", price: "$35+" },
  { name: "Gel Manicure", time: "50 min", price: "$50+" },
  { name: "Spa Pedicure", time: "55 min", price: "$60+" },
  { name: "Nail Art Add-On", time: "15 min", price: "$10+" },
  { name: "Acrylic Full Set", time: "75 min", price: "$75+" },
];

export default function ServicesPage() {
  return (
    <div className="container page-stack">
      <h1>Services</h1>
      <p>Professional nail services for clients in North York and surrounding Toronto neighborhoods.</p>
      <div className="list-wrap">
        {services.map((service) => (
          <article key={service.name} className="list-item">
            <h2>{service.name}</h2>
            <p>{service.time}</p>
            <p>{service.price}</p>
          </article>
        ))}
      </div>
    </div>
  );
}