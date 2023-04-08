import React from "react";
import "./MediaTab.css";
import Video from "./Video";

export default function MediaTab(): JSX.Element {
  return (
    <div className="Media-tab">
      <h2>Media Tab</h2>
      <Video />
    </div>
  );
}
