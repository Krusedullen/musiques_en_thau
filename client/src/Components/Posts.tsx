import React from "react";
import Video from "./../Components/Video";

//imports for å hente inn post komponenter. Dataene fra "entries" blir erstattet av database.:
import { entries } from "../Utils/entries";
import InfoPost from "./InfoPost";
import SponsorCard from "./SponsorCard";

export default function Posts() {
  /*litt hardkode O_o  */
  return (
    <div className="posts">
      <div className="info-post">
        <img
          src={
            process.env.PUBLIC_URL + "/images/hot_club_de_norvège_poster.jpg"
          }
          alt="hot_club_de_norvège"
        ></img>
        <h1 className="info-post__header">
          JUNE 30th, MARSEILLAN: "MUSIQUES EN THAU" JAZZ FESTIVAL!
        </h1>
        <p className="info-post__content">
          Meet great musicians and experience the music in the harbor of the old
          and picturesque town of Marseillan.
          <br />
          <br />
          This is a year to commemorate the well known Django Reinhardt who died
          70 years ago.
          <br />
          <br />
          So, through hard work with a good group of french, swedish and
          norwegian forces, we, the association «Musique en Thau» have composed
          a program as follows:
          <br />
          <br />
          <p className="info-post__content info-post__temp-list-title">
            <b>Port of Marseillan June 30th 2023</b>
            <ul>
              <li>
                <b>19.30</b> The opening of the festival
              </li>
              <li>
                <b>19.45</b> Ana Cruise Trio, Jazz, Marseillan France
              </li>
              <li>
                <b>20.15</b> Elisabeth Melander with Cédric Chauveau trio, jazz,
                Sweden and France
              </li>
              <li>
                <b>21.15</b> Hot Club de Norvège, jazz and tribute to Django
                Reinhardt, Norway
              </li>
              <li>
                <b>23.30</b> …..end of performances…or…
              </li>
            </ul>
          </p>
          <br />
          This is a great opportunity to experience the absolutely best jazz
          musicians in Europe for FREE!
          <br />
          <br />
          Don't miss it!
          <br />
          <br />
          Welcome!
        </p>
      </div>
      <Video />
      {Object.values(entries).map(({ title, description, image }) => {
        return (
          <InfoPost title={title} description={description} image={image} />
        );
      })}
      <SponsorCard />
    </div>
  );
}

/*
den endelige koden looper gjennom og presenterer post-komponenter. Skal hente info fra database:

{Object.values(entries).map(({ title, description }) => {
  return <InfoPost title={title} description={description} />;
})}{" "}

*/
