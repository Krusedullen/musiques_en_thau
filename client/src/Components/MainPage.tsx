import React from "react";
import ImageSlideshow from "./ImageSlideshow";
import ArtistReel from "./ArtistReel";
import Posts from "./Posts";
import { useOutletContext } from "react-router-dom";

export default function MainPage() {
  const language: string = useOutletContext();

  return (
    <div className="main-content">
      <ArtistReel />
      <div className="main-content-inner">
        <Posts language={language} />
        <ImageSlideshow />
      </div>
    </div>
  );
}