import React from "react";
import ArtistCard from "./ArtistCard";
import { artists } from "../Utils/artists";
import EmbededMap from "./EmbededMap";
import SponsorCard from "./SponsorCard";

export default function ArtistReel(props: { language: string }): JSX.Element {
  const language = props.language;
  const artistCards = Object.values(artists).map(
    ({ navn, bio, id, src, artistpage }) => {
      return (
        <ArtistCard
          name={navn}
          bio={bio}
          id={id}
          avatarImage={src}
          artistpage={artistpage}
        />
      );
    }
  );

  const heading = (lang: string) => {
    if (lang === "fr") return "Rencontrez les artistes";
    else return "Meet The Artists";
  };

  return (
    <div className="artist-reel">
      <h1 className="artist-reel__header">{heading(language)}</h1>
      <div className="artist-reel__artists">
        <>{artistCards}</>
      </div>

      <br />
      <div className="desktop-only">
        <EmbededMap />
        <br />
        <SponsorCard language={language} />
      </div>
    </div>
  );
}
