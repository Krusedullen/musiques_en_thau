import React from "react";
import ArtistCard from "./ArtistCard";
import { artists } from "../Utils/artists";

export default function ArtistReel(): JSX.Element {
  const artistCards = Object.values(artists).map(({ navn, bio, id }) => {
    return <ArtistCard name={navn} bio={bio} id={id} />;
  });

  return (
    <div className="artist-Reel">
      <h1 className="reel-header">Meet The Artists</h1>
      <div className="artists">
        <>
        {artistCards}
        </>
      </div>
    </div>
  );
}
