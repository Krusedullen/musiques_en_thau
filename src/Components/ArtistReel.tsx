import React from "react";
import ArtistCard from "./ArtistCard";
import { artists } from "../Utils/artists";

export default function ArtistReel(): JSX.Element {
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

  return (
    <div className="artist-reel">
      <h1 className="artist-reel__header">Meet The Artists</h1>
      <div className="artist-reel__artists">
        <>{artistCards}</>
      </div>

      <div className="side-bar-map">
        <iframe
          title="Marseillan Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1450.5510027831413!2d3.530230088037457!3d43.35397685563521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1685827295465!5m2!1sen!2sno"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
