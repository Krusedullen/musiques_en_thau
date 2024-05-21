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
      src={process.env.PUBLIC_URL + "/images/custom_posterFr.jpg"}
      alt="Concerts de jazz franco-scandinaves gratuits"
    ></img></a>
    
    <img className="centered contained-img"
    src={process.env.PUBLIC_URL + "/images/programFr.png"}
    alt="du 4 au 7 Juillet. Port de Marseillan"
    ></img> 
    
    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/a_propos.png"}
      alt="Début 2022, forte de son engagement pour la culture tout au long de sa carrière politique en Norvège, Marie Kürstein initie l’organisation d’un premier mini festival de jazz, à Marseillan, sur son port. Étant proche de nombreux musiciens, œuvrant pour le jazz, les musiques traditionnelles ou la bossanova aussi bien en Norvège, en Suède ou ici dans l’Hérault, elle décide de créer cet évènement en s’appuyant sur sa volonté de faire se rencontrer ces musiciens pour proposer un spectacle au public de la région qui a bel et bien répondu présent.
      Rejointe rapidement par un collectif d’amateurs de jazz, elle décide de lancer l’évènement avec l’appui de la Ville de Marseillan. Au total, plus d’une vingtaine de musiciens français, norvégiens ou suédois ont répondu présents sur le port de Marseillan : The New Orleans JazzCab, Ana Cruise Trio, Elisabeth Melander, Karin Turresson, The French Connection.
      Les éditions 2022 et 2023 ayant été accueillies très favorablement, l’édition 2024 s’est avérée être une évidence, pour le nouveau nom de North to South Jazz Festival, pour représenter l’esprit franco-scandinave de l’aventure.
      "
    ></img>

    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/northsouth_info_poster.png"}
      alt=""
    ></img>

    </>
)

const englishPosters = (
    <>
        <a href={northSouthFacebook}><img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/bannerEn.png"}
      alt="Welcome to the 'North to South' Festival. 
      A jazz festival featuring artists from France and Norway. 
      The festival takes place from the 4th to the 7th of July in the Port of Marseillan. Entry is free."
    ></img></a>

<img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/custom_posterFr.jpg"}
      alt=""
    ></img>
    
    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/programEn.png"}
      alt="Thursday kicks off the festival with 'Swing Night'. Friday is 'Jazz Night', where the Espen Eriksen Trio from Norway will perform. On Saturday the town of Marseillan will host an event to welcome the newcomers. Sunday closes off the festival with 'Jam Night', where a succession of Scandinavian and French groups will be featured."
    ></img> 

    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/about.png"}
      alt="At the start of 2022, building on her commitment to culture throughout her political career in Norway, Marie Kürstein initiated the organization of a first mini jazz festival, in Marseillan, on the port. Being close to many musicians, working for jazz, traditional music or bossanova in Norway, Sweden or in the South of France, she decided to create this event based on her desire to bring these international musicians together and create a special show for the local crowd. 

      Quickly joined by a collective of jazz lovers, she decided to launch the event with the support of the City of Marseillan. In total, more than twenty French, Norwegian and Swedish musicians were present at the port of Marseillan: The New Orleans JazzCab, Ana Cruise Trio, Elisabeth Melander, Karin Turresson, The French Connection.
      
      The 2022 and 2023 editions having been very favorably received, the 2024 edition is an obvious choice, under the new name of North to South Jazz Festival, to represent the Franco-Scandinavian spirit of this one-of-a-kind jazz festival.
      "
    ></img>

    <img className="centered contained-img"
      src={process.env.PUBLIC_URL + "/images/northsouth_info_poster.png"}
      alt=""
    ></img>

    

    </>
    
)