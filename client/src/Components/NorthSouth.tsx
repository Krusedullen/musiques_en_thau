import React from "react";
import TempPosterReel from "./TempPosterReel";
import { useOutletContext } from "react-router-dom";


export default function NorthSouth() {
    const language: string = useOutletContext();
  
    return (
      <div className="main-content">
        
        <div className="main-content-inner">
        <TempPosterReel language={language} />
        <img className="centered contained-img"
          src={process.env.PUBLIC_URL + "../Images/ecomobility.webp"}
          alt="sponsor poster"
        ></img>


        </div>
      </div>
    );
  }