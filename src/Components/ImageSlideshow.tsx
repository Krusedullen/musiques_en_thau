import React from "react";
import { images } from "../Utils/slideshow";
import leftArrow from "../Images/common-icons/angle-circle-left.svg";
import rightArrow from "../Images/common-icons/angle-circle-right.svg";

export default function MediaTab(): JSX.Element {
  const imageBoxes = Object.values(images).map(({ src, imgText }) => {
    return <img className="reel-image" src={src} alt={imgText}></img>;
  });

  const handleClick = () => {
    // skift bilde - imageBox[state]
  };

  return (
    <div className="Image-Slideshow">
      <button className="previous-img" onClick={handleClick}>
        <img className="reel-icon" src={leftArrow} alt="Previous" />
      </button>
      {imageBoxes[0]}
      <button className="next-img" onClick={handleClick}>
        <img className="reel-icon" src={rightArrow} alt="Next" />
      </button>
    </div>
  );
}
