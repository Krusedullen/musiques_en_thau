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

      <br />

      <div className="side-bar-map">
        <iframe
          title="Marseillan Map"
          src="https://www.google.com/maps/embed/place?pb=!1m10!1m8!1m3!1d1450.5539828300643!2d3.531262650456918!3d43.353852180384365!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sno!4v1686743976800!5m2!1sen!2sno"
          loading="lazy"
        ></iframe>
      </div>
      <br />
      <div className="sponsors-section">
        <h1 className="artist-reel__header">Sponsors</h1>
        <p>Coming soon</p>
      </div>
    </div>
  );
}
