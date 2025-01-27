import React from "react";
import { useOutletContext } from "react-router-dom";
//import ImageSlideshow from "./ImageSlideshow";
//import ArtistReel from "./ArtistReel";
//import Posts from "./Posts";
import TempPosterReel from "./TempPosterReel";
import Video from "./Video";

export default function MainPage() {
  const language: string = useOutletContext();

  return (
    <div className="main-content">
      <div className="main-content-inner">
      
        <Video/>     
        <TempPosterReel language={language} />
        
        {
          //<Posts language={language} />
          //<ImageSlideshow />
          //<ArtistReel language={language}/>
        }
      </div>
    </div>
  );
}
