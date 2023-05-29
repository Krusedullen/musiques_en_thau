import React, { MouseEventHandler, useState } from "react";
import { images } from "../Utils/slideshow";
import leftArrow from "../Images/common-icons/angle-circle-left.svg";
import rightArrow from "../Images/common-icons/angle-circle-right.svg";

export default function MediaTab(): JSX.Element {
  const [imageIndex, setImageIndex] = useState(0);
  const imageBoxes = Object.values(images).map(({ src, imgText }) => {
    return <img className="reel-image" src={src} alt={imgText}></img>;
  });

  const handleClick: MouseEventHandler = (e) => {
    const button = e.currentTarget.className;

    if (button === "next-img") {
      if (imageBoxes.length - 1 > imageIndex) setImageIndex(imageIndex + 1);
    }
    if (button === "previous-img") {
      if (imageIndex > 0) setImageIndex(imageIndex - 1);
    }
  };

  return (
    <div className="Image-Slideshow">
      <button className="previous-img" onClick={handleClick}>
        <img className="reel-icon previous" src={leftArrow} alt="Previous" />
      </button>
      {imageBoxes[imageIndex]}
      <button className="next-img" onClick={handleClick}>
        <img className="reel-icon next" src={rightArrow} alt="Next" />
      </button>
    </div>
  );
}
