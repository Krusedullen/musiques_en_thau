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
        <h1 className="info-post__header">Ana Cruise Quintet</h1>

        <p className="info-post__content">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ArtistImages/ana-cruise-trio.jpg"
            }
            alt="ana cruise trio"
          ></img>
          <br />
          This group of musicians from Marseillan, boasts a broad repertoire
          from the good oldies to contemporary music. Let them take you to that
          “late night jazz club” feeling with their pleasant swing, bluesy and
          jazzy tunes! With their charm and sharp wit, vocalist Gabrielle (on
          double bass), and Christine on drums offer you their classics: each
          piece is a story told together with Jeff, their creative guitarist.
          <br />
          <br />
          The original trio was recently joined by Thierry on keyboard and
          Stéphane on guitar. New horizons are opening up to create an
          unexpected musical universe with simplicity and humor to wow the
          audience with.
        </p>
      </div>

      <div className="info-post">
        <h1 className="info-post__header ">
          Elisabeth Melander and the Cédric Chauveau Trio
        </h1>

        <p className="info-post__content">
          <img
            src={
              process.env.PUBLIC_URL +
              "/images/ArtistImages/melander_chauveau.jpg"
            }
            alt="Elisabeth Melander and Cédric Chauveau"
          ></img>
          <br />
          Swedish jazz singer and vocal coach Elisabeth Melander (to the right),
          is a renowned talent across several musical genres and other art
          forms. As a singer, she has distinguished herself above all in jazz,
          soul and gospel, and has been a lecturer at Malmö Academy of Music
          since 1985. Singer, actor, composer, lyricist, this multi-talent has
          appeared on jazz festivals, in TV and radio both in her native Sweden
          and abroad. Her album "Reflections Of A Voice" was released to much
          acclaim and won second runner-up in the Women's Vocal Section of "The
          40th Annual Jazz Station Awards - The Best Jazz 2018".
          <br />
          <br />
          Elisabeth often features as a guest soloist for ensembles, big bands
          and choirs, and for Musiques en Thau she will be accompanied by the
          Cédric Chauveau (to the left) with his Cédric Chauveau Trio.
        </p>
      </div>

      <div className="info-post">
        <h1 className="info-post__header ">Cédric Chauveau Trio</h1>

        <p className="info-post__content">
          <img
            src={process.env.PUBLIC_URL + "/images/ArtistImages/c_chauveau.jpg"}
            alt="Cédric Chauveau Trio"
          ></img>
          <br />
          The trio is composed of Cédric Chauveau (piano), Michel Altier (double
          bass) and Michael Santanastasio (drums). These three seasoned
          musicians, who all come from the same region, have been playing
          together regularly for many years. With their professional groove and
          common passion for jazz, they are bringing this exceptional concert to
          new heights!
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
          The Scandinavian standard for hot swing!
          <br />
          Founded in Oslo in 1979 by Jon Larsen, the group has toured
          continuously in Norway and around the world for over 40 years. Larsen
          has released dozens of albums, with Django Reinhardt and his Quintette
          du Hot Club de France as his main inspiration.
          <br />
          <br />
          Spearheading the revival of gypsy jazz worldwide in the 80s, the group
          received numerous awards and collaborated with the biggest names in
          the genre, such as Stochelo Rosenberg, Biréli Lagrène, Angelo Debarre,
          Jimmy Rosenberg, Adrien Moignard or Florin Niculescu, as well as
          artists like Jon Gordon or Howard Alden. Other collaborations include
          string ensembles such as the Camelia Strykekvartett and the symphony
          orchestras of Kristiansand, Tromsø and Trondheim (Norway).
          <br />
          <br />
          First a trio, the band has grown and gone through a few line-up
          changes over the years. Today it consists of founding member Svein
          Aarbostad (double bass), violinist/harmonicist Finn Hauge, French
          guitarist Gildas Le Pape and newcomer Ola Erlien. With members aged 22
          to 72, the group brilliantly demonstrates that jazz defies all
          borders!
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
