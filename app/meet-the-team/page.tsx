import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Meet the Team"),
  description: localDescription("Meet our nail artists"),
};

const team = [
  { name: "Anna", role: "Senior Nail Artist", bio: "Specializes in structured gel manicures and detailed hand-painted designs." },
  { name: "Maya", role: "Pedicure Specialist", bio: "Known for relaxing spa pedicures and clean, long-lasting finishes." },
  { name: "Linh", role: "Acrylic Technician", bio: "Creates elegant extension sets with natural shaping and durable retention." },
];

export default function TeamPage() {
  return (
    <div className="container page-stack">
      <h1>Meet the Team</h1>
      <p>Friendly and experienced professionals serving North York clients every day.</p>
      <div className="card-grid">
        {team.map((member) => (
          <article key={member.name} className="card">
            <h2>{member.name}</h2>
            <p><strong>{member.role}</strong></p>
            <p>{member.bio}</p>
          </article>
        ))}
      </div>
    </div>
  );
}