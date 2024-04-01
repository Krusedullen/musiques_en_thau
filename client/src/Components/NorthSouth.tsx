import React from "react";
//import { useOutletContext } from "react-router-dom";


export default function NorthSouth() {
    //const language: string = useOutletContext();
  
    return (
      <div className="main-content">
        
        <div className="main-content-inner">
        <h1 className="centered">Festival content coming soon</h1>
        <img className="centered contained-img"
          src={process.env.PUBLIC_URL + "../Images/northsouth-poster.jpg"}
          alt="sponsor poster"
        ></img>
        </div>
      </div>
    );
  }