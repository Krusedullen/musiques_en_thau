import React from "react";
import ImageSlideshow from "./ImageSlideshow";
import ArtistReel from "./ArtistReel";
import Posts from "./Posts";

export default function MainPage() {
  //props:string
  //const language: string = props.language;
  return (
    <div className="main-content">
      <ArtistReel />
      <div className="main-content-inner">
        <Posts />
        <ImageSlideshow />
      </div>
    </div>
  );
}
