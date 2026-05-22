import type { Metadata } from "next";
import BookingForm from "./components/booking-form";
import { buildTitle, localDescription, siteConfig } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Book Your Appointment"),
  description: localDescription("Online nail appointment booking"),
};

export default function BookingPage() {
  return (
    <div className="container page-stack">
      <h1>Booking</h1>
      <p>
        Reserve your manicure or pedicure appointment at Lovely Nails in North
        York.
      </p>
      <div className="card">
        <h2>Call To Book</h2>
        <p>{siteConfig.phone}</p>
        <p>
          Walk-ins welcome based on availability. For evenings and weekends, we
          recommend pre-booking.
        </p>
      </div>
      <BookingForm />
    </div>
  );
}
