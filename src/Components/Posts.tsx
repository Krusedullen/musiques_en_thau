import React from "react";
import { entries } from "../Utils/entries";
import InfoPost from "./InfoPost";

export default function Posts() {
  return (
    <div className="posts">
      {/*litt hardkode O_o  */}
      <div className="info-post">
        <img
          src={"/images/hot_club_de_norvège_poster.jpg"}
          alt="hot_club_de_norvège"
        ></img>
        <h1 className="info-post__header">
          JUNE 30th, MARSEILLAN: "MUSIQUES EN THAU" JAZZ FESTIVAL!
        </h1>
        <p className="info-post__content">
          Meet great musicians and experience the music in the harbor of the old
          and picturesque town of Marseillan.
        </p>
        <p className="info-post__content">
          This is a year to commemorate the well known Django Reinhardt who died
          70 years ago.
        </p>
        <p className="info-post__content">
          So, through hard work with a good group of french, swedish and
          norwegian forces, we, the association «Musique en Thau» have composed
          a program as follows:
          <p className="info-post__content info-post__temp-list-title">
            Port of Marseillan June 30th 2023
            <ul>
              <li>19.30 The opening of the festival</li>
              <li>19.45 Ana Cruise Trio, Jazz, Marseillan France</li>
              <li>
                20.15 Elisabeth Melander with Cédric Chauveau trio, jazz, Sweden
                and France
              </li>
              <li>
                21.15 Hot Club de Norvège, jazz and tribute to Django Reinhardt,
                Norway
              </li>
              <li>23.30 …..end of performances…or…</li>
            </ul>
          </p>
        </p>

        <p className="info-post__content">
          This is a great opportunity to experience the absolutely best jazz
          musicians in Europe for FREE!
        </p>
        <p className="info-post__content">Don't miss it!</p>
        <p className="info-post__content">Welcome!</p>
      </div>
      <div className="info-post">
        <h1 className="info-post__header">Good things come in three</h1>
        <img
          src={"/images/ArtistImages/ana-cruise-trio.jpg"}
          alt="ana cruise trio"
        ></img>
        <p className="info-post__content">
          Alt text: The Ana Cruise Trio will be opening the performances.
        </p>
      </div>
      {/*den endelige koden skal hente info fra database */}
      {Object.values(entries).map(({ title, description }) => {
        return <InfoPost title={title} description={description} />;
      })}{" "}
    </div>
  );
}
