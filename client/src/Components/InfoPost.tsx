import React, { ReactElement } from "react";

type infoPostProps = {
  title: string;
  image: string;
  description: string | ReactElement;
  key_id: string;
};

const InfoPost: React.FC<infoPostProps> = ({
  title,
  image,
  description,
  key_id,
}) => {
  return (
    <div className="info-post" id={key_id} key={key_id}>
      <h1 className="info-post__header">{title}</h1>
      <div className="info-post__content">
        <picture>
          <source
            type="image/webp"
            srcSet={process.env.PUBLIC_URL + image + ".webp"}
          />
          <source
            type="image/jpeg"
            srcSet={process.env.PUBLIC_URL + image + ".jpg"}
          />
          <img src={process.env.PUBLIC_URL + image + ".jpg"} alt={title}></img>
        </picture>
        <br />
        {description}
      </div>
    </div>
  );
};

export const customPost1: React.FC<infoPostProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="info-post">
      <picture>
        <source
          type="image/webp"
          srcSet={process.env.PUBLIC_URL + image + ".webp"}
        />
        <source
          type="image/jpeg"
          srcSet={process.env.PUBLIC_URL + image + ".jpg"}
        />
        <source
          type="image/png"
          srcSet={process.env.PUBLIC_URL + image + ".png"}
        />
        <img src={process.env.PUBLIC_URL + image + ".jpg"} alt={title}></img>
      </picture>
      <h1 className="info-post__header">{title}</h1>
      <div className="info-post__content">
        <br />
        {description}
      </div>
    </div>
  );
};

export default InfoPost;

/* 
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
*/
