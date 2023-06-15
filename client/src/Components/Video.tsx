import React, { useRef } from "react";
import { NULL } from "sass";
const Video1 = "/videos/musique_promo_vid.mp4";

export default function Video(this: HTMLVideoElement): JSX.Element {
  const handleVideoVolume = (event: any) => {
    event.preventDefault();
    event.target.volume = 0.2;
    console.log(event);
  };

  return (
    <div className="video-frame">
      <video
        controls
        onPlay={handleVideoVolume}
        className="video-frame_video"
        loop
        src={Video1}
      ></video>
    </div>
  );
}

//type="video/mp4"
