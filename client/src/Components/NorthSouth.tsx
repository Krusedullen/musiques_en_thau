import React from "react";
//import { useOutletContext } from "react-router-dom";


export default function NorthSouth() {
    //const language: string = useOutletContext();
  
    return (
      <div className="main-content">
        
        <div className="main-content-inner">
        <img className="centered contained-img"
          src={process.env.PUBLIC_URL + "../Images/banner.png"}
          alt="sponsor poster"
        ></img>
        <img className="centered contained-img"
          src={process.env.PUBLIC_URL + "../Images/northsouth_info_poster.png"}
          alt="sponsor poster"
        ></img>
        </div>
      </div>
    );
  }