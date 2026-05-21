import type { Metadata } from "next";
import { buildTitle, localDescription, siteConfig } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Book Your Appointment"),
  description: localDescription("Online nail appointment booking"),
};

export default function BookingPage() {
  return (
    <div className="container page-stack">
      <h1>Booking</h1>
      <p>Reserve your manicure or pedicure appointment at Lovely Nails in North York.</p>
      <div className="card">
        <h2>Call To Book</h2>
        <p>{siteConfig.phone}</p>
        <p>Walk-ins welcome based on availability. For evenings and weekends, we recommend pre-booking.</p>
      </div>
      <form className="booking-form" aria-label="Appointment request form">
        <label>
          Full Name
          <input type="text" name="name" placeholder="Your name" />
        </label>
        <label>
          Phone Number
          <input type="tel" name="phone" placeholder="(416) 555-0188" />
        </label>
        <label>
          Service
          <input type="text" name="service" placeholder="Gel manicure" />
        </label>
        <label>
          Preferred Date
          <input type="date" name="date" />
        </label>
        <button type="submit" className="btn btn-primary">Request Appointment</button>
      </form>
    </div>
  );
}