import React, { useState } from "react";
import { images } from "../Utils/slideshow";
import leftArrow from "../Images/common-icons/angle-circle-left.svg";
import rightArrow from "../Images/common-icons/angle-circle-right.svg";

export default function MediaTab(): JSX.Element {
  const [imgIndex, setImgIndex] = useState(0);

  const imageBoxes = Object.values(images).map(({ src, imgText }) => {
    return <img className="reel-image" src={src} alt={imgText}></img>;
  });

  const handleClick = (modifier: number) => {
    //sjekker ny index mot tilgjengelige indexer før den endrer index.
    const newIndex: number = imgIndex + modifier;
    const maxIndex: number = Object.values(images).length - 1;
    if (newIndex < 0) {
      setImgIndex(maxIndex);
    } else if (newIndex > maxIndex) {
      setImgIndex(0);
    } else setImgIndex(newIndex);
  };

  return (
    <div className="Image-Slideshow">
      <button className="previous-img" onClick={() => handleClick(-1)}>
        <img className="reel-icon" src={leftArrow} alt="Previous" />
      </button>
      {imageBoxes[imgIndex]}
      <button className="next-img" onClick={() => handleClick(+1)}>
        <img className="reel-icon" src={rightArrow} alt="Next" />
      </button>
    </div>
  );
}
