import React from "react";
import { northSouthFacebook } from "../Utils/Utils";



export default function TempPosterReel(props: { language: string }){
    const lang = props.language;
    let posters = frenchPosters;
    if (lang === "en") {posters= englishPosters;} else posters= frenchPosters;
    return posters;

}

const frenchPosters = (
    <>
        <a href={northSouthFacebook}><img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/bannerFr.png"}
      alt="festival banner"
    ></img></a>
    
    <img className="centered contained-img"
    src={process.env.PUBLIC_URL + "/images/programFr.png"}
    alt="program"
    ></img> 
    
    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/a_propos.png"}
      alt="about poster"
    ></img>

    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/northsouth_info_poster.png"}
      alt="festival info poster"
    ></img>

    </>
)

const englishPosters = (
    <>
        <a href={northSouthFacebook}><img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/bannerEn.png"}
      alt="festival banner"
    ></img></a>
    
    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/programEn.png"}
      alt="program"
    ></img> 

    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/about.png"}
      alt="about poster"
    ></img>

    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/northsouth_info_poster.png"}
      alt="festival info poster"
    ></img>

    

    </>
    
)