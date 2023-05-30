
import React, { MouseEventHandler, useState } from "react";
import { images } from "../Utils/slideshow";
import { LeftArrow, RightArrow } from "./Icons";

export default function MediaTab(): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);
  const imageBoxes = Object.values(images).map(({ src, imgText }) => {
    return <img className="reel-image" src={src} alt={imgText}></img>;
  });

  const handleClick: MouseEventHandler = (e) => {
    const button = e.currentTarget.className;

    if (button === "next-img") {
      if (imageBoxes.length - 2 < imageIndex) setImageIndex(0);
      else setImageIndex(imageIndex + 1);
    }
    if (button === "previous-img") {
      if (imageIndex > 0) setImageIndex(imageIndex - 1);
      else setImageIndex(imageBoxes.length - 1);
    }
  };

  return (
    <div className="Image-Slideshow" aria-label="Image slideshow">
      {imageBoxes[imageIndex]}
      <div className="img-nav">
        <button
          className="previous-img"
          aria-label="previous image"
          onClick={handleClick}
        >
          <LeftArrow />
        </button>
        <button
          className="next-img"
          aria-label="next image"
          onClick={handleClick}
        >
          <RightArrow />
        </button>
      </div>
    </div>
  );
}
