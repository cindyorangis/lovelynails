import type { Metadata } from "next";
import { buildTitle, localDescription } from "../site-data";

export const metadata: Metadata = {
  title: buildTitle("Meet the Team"),
  description: localDescription("Meet our nail artists"),
};

const team = ["Kim", "Anna", "Helen", "Amy", "Julie", "Jacob"];

export default function TeamPage() {
  return (
    <div className="container page-stack">
      <h1>Meet the Team</h1>
      <p>
        Friendly and experienced professionals serving North York clients every
        day.
      </p>
      <div className="team-name-grid" aria-label="Lovely Nails team members">
        {team.map((member) => (
          <article key={member} className="team-name-card">
            <span aria-hidden="true">{member.charAt(0)}</span>
            <h2>{member}</h2>
          </article>
        ))}
      </div>
    </div>
  );
}
