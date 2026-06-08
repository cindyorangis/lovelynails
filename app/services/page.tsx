import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";
import ServicesSelector from "./components/services-selector";
import { cn, container } from "../../lib/styles";

export const metadata: Metadata = {
  title: buildTitle("Nail Services"),
  description: localDescription(
    "Manicure, pedicure, waxing, and nail art services",
  ),
};

export default function ServicesPage() {
  return (
    <div className="services-page-shell">
      <div className={cn(container, "services-page-layout")}>
        <header className="services-page-header">
          <h1>Services</h1>
          <p>Select one or more services, then continue to booking.</p>
        </header>
        <ServicesSelector />
      </div>
    </div>
  );
}
