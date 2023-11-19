import React from "react";
import ArtistCard from "./ArtistCard";
import { artists } from "../Utils/artists";
//import SponsorCard from "./SponsorCard";
//import EmbededMap from "./EmbededMap";


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
    if (lang === "fr") return "Rencontrez les artistes de l’édition 2023";
    else return "Meet The Artists, summer 2023";
  };

  return (
    <div className="artist-reel">
      <h1 className="artist-reel__header">{heading(language)}</h1>
      <div className="artist-reel__artists">
        <>{artistCards}</>
      </div>

     
      <div className="desktop-only">
        {/*  <br />
        <EmbededMap />
        <br /> 
        <SponsorCard language={language} />
        */}
      </div>
    </div>
  );
}
