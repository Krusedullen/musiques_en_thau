import React from "react";
import ImageSlideshow from "./ImageSlideshow";
import ArtistReel from "./ArtistReel";
import Posts from "./Posts";
import { useOutletContext } from "react-router-dom";

export default function MainPage() {
  const language: string = useOutletContext();

  return (
    <div className="main-content">
      
      <div className="main-content-inner">
      {//<ArtistReel language={language} />
      }
      {/*midlertidig poster på toppen av siden.*/}
      <a href="/northtosouth"><img className="centered contained-img"
      src={process.env.PUBLIC_URL + "../Images/northsouth_info_poster.png"}
      alt="sponsor poster"
    ></img></a>
      

        <Posts language={language} />
        <ImageSlideshow />
      </div>
    </div>
  );
}
