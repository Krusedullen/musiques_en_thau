import React from "react";

/* imports for å hente inn post komponenter. Dataene fra "entries" blir erstattet av database.:
import { entries } from "../Utils/entries";
import InfoPost from "./InfoPost";
*/

export default function Posts() {
  return (
    <div className="posts">
      {/*litt hardkode O_o  */}
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

      <div className="info-post">
        <h1 className="info-post__header">Good things come in three</h1>

        <p className="info-post__content">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ArtistImages/ana-cruise-trio.jpg"
            }
            alt="ana cruise trio"
          ></img>
          <br />
          Alt text: The Ana Cruise Trio will be opening the performances.
        </p>
      </div>

      <div className="info-post">
        <h1 className="info-post__header ">And then there were four</h1>

        <p className="info-post__content">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ArtistImages/melander_chauveau.jpg"
            }
            alt="Elisabeth Melander and Cédric Chauveau"
          ></img>
          <br />
          Alt text: Distinguished jazz singer Elisabeth Melander (to the right)
          teams up with the Cédric Chauveau Trio. With Cedric Chauveau (to the
          left) on the piano joined by bassist Nicola Sabato and drummer Michael
          Santanastasio, this is a team-up that is sure to get us excited!
        </p>
      </div>

      <div className="info-post">
        <h1 className="info-post__header ">Hot Club de Norvège</h1>

        <p className="info-post__content">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ArtistImages/hot_club_colours.jpg"
            }
            alt="Hot Club de Norvège"
          ></img>
          <br />
          Alt text: ....
        </p>
      </div>

      <div className="info-post">
        <h1 className="info-post__header ">Cédric Chauveau Trio</h1>

        <p className="info-post__content">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ArtistImages/Cédric-Chauveau-trio.jpg"
            }
            alt="Hot Club de Norvège"
          ></img>
          <br />
          Alt text: ....
        </p>
      </div>
    </div>
  );
}

/*
den endelige koden looper gjennom og presenterer post-komponenter. Skal hente info fra database:

{Object.values(entries).map(({ title, description }) => {
  return <InfoPost title={title} description={description} />;
})}{" "}

*/
