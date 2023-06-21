import React from "react";

export default function SponsorCard(props: { language: string }) {
  const language = props.language;
  const heading = (lang: string) => {
    if (lang === "fr") return "Commanditaires";
    else return "Sponsors";
  };

  return (
    <div className="sponsor-card">
      <h1 className="sponsor-card__header"> {heading(language)} </h1>
      <p className="sponsor-card__content">
        <img
          src={process.env.PUBLIC_URL + "/images/musiques_sponsors_poster.jpg"}
          alt="sponsor poster"
        ></img>
      </p>
    </div>
  );
}
