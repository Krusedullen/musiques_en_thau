
import React, { MouseEventHandler, useState } from "react";
import { images } from "../Utils/slideshow";
import { LeftArrow, RightArrow } from "./Icons";

export default function MediaTab(): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);
  const imageBoxes = Object.values(images).map(({ src, imgText }) => {
    return (
      <img
        className="image-slideshow__image"
        src={process.env.PUBLIC_URL + src}
        alt={imgText}
      ></img>
    );
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
    <div className="image-slideshow" aria-label="image slideshow">
      {imageBoxes[imageIndex]}
      <div className="image-slideshow__nav">
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
