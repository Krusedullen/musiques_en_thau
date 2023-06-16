import React from "react";

export default function SponsorCard() {
  return (
    <div className="sponsor-card">
      <h1 className="sponsor-card__header">Sponsors</h1>
      <p className="sponsor-card__content">
        <img
          src={process.env.PUBLIC_URL + "/images/musiques_sponsors_poster.jpg"}
          alt="sponsor poster"
        ></img>
      </p>
    </div>
  );
}
