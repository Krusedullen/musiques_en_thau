import React from "react";
import {entries} from "../Utils/entries"
import InfoPost from "./InfoPost";

export default function Posts() {
  return (
    <div className="posts">
      { Object.values(entries).map(({title, description}) => {
        return (<InfoPost title={title} description={description}/>)
        })
      } </div>
    )};
