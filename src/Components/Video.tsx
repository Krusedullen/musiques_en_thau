import React from "react";
import "../../public/styles/layout/Video.css"
import Video1 from "../Videos/Video1.mp4";

export default function Video(): JSX.Element {
  return (
    <div className="video">
      <video src={Video1} />
    </div>
  );
}

//type="video/mp4"