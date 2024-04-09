import React from "react";
import ImageSlideshow from "./ImageSlideshow";
//import ArtistReel from "./ArtistReel";
import Posts from "./Posts";
import { useOutletContext } from "react-router-dom";
import TempPosterReel from "./TempPosterReel";

export default function MainPage() {
  const language: string = useOutletContext();

  return (
    <div className="main-content">
      <div className="main-content-inner">     
        <TempPosterReel language={language} />
        <Posts language={language} />
        {
          //<ImageSlideshow />
        }
      </div>
    </div>
  );
}
