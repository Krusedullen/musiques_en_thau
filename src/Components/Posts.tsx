import React from "react";
import {entries} from "../Utils/entries"
import InfoPost from "./InfoPost";
import cruiseTrio from "../Images/ArtistImages/ana-cruise-trio.jpg";

export default function Posts() {
  return (
    <div className="posts">

      {/*litt hardkode O_o  */}
      <div className="info-post">
        <h1 className="info-post-header">Ana Cruise Trio</h1>
        <img src={cruiseTrio} alt="avatar"></img>
        <p className="info-post-content">Our warm up band will be the very talented Ana Cruise Trio</p>
      </div>
      
      {/*den endelige koden skal hente info fra database */}
      {Object.values(entries).map(({ title, description }) => {
        return <InfoPost title={title} description={description} />;
      })}{" "}
    </div>
  );
};
