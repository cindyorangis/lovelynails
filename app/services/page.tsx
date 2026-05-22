import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";
import ServicesSelector from "./components/services-selector";

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
        Browse our full service menu for Lovely Nails in North York. Select one
        or more services, then continue to booking.
      </p>
      <ServicesSelector />
    </div>
  );
}
