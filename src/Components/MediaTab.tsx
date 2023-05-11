import React from "react";
import "../styles/layout/MediaTab.scss";
import Video from "./Video";

export default function MediaTab(): JSX.Element {
  return (
    <div className="Media-tab">
      <h2>Media Tab</h2>
      <Video />
    </div>
  );
}
