import React from "react";
const Video1 = "/videos/NorthToSouth_video.mp4";

export default function Video(): JSX.Element {
  const handleVideoVolume = (event: any) => {
    event.preventDefault();
    event.target.volume = 0.1;
    //console.log(event);
  };

  return (
    <div className="video-frame">
      <video
        controls
        autoPlay
        muted
        onPlay={handleVideoVolume}
        className="video-frame_video"
        loop
        src={Video1}
      ></video>
    </div>
  );
}

//type="video/mp4"
