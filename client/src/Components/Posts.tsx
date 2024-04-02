import React from "react";
import Video from "./../Components/Video";
import { entries, customPoster, frenchEntries,} from "../Utils/entries";
import InfoPost from "./InfoPost";
//import SponsorCard from "./SponsorCard";

export default function Posts(props: { language: string }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const language: string = props.language;

  
  //bygger entries fra en samling engelsk/fransk
  const buildEntries = (lang: string) => {
    let collection = frenchEntries;
    if (lang === "en") {
      collection = entries;
    } else collection = frenchEntries;
    return (
      <>
        {Object.values(collection).map(({ title, description, image, key }) => {
          return (
            <InfoPost
              title={title}
              description={description}
              image={image}
              key_id={key}
            />
          );
        })}
      </>
    );
  };

  return (
    <div className="posts">
      {//topPoster(language)
      }
      {//buildEntries(language)
      }
      <Video />
      {//<SponsorCard language={language} />
      }
    </div>
  );
}
/*
const topPoster = (lang: string) => {
    let collection = customPoster.fr.content;
    if (lang === "en") {
      collection = customPoster.en.content;
    } else collection = customPoster.fr.content;
    return collection;
  };
  */

/*
den endelige koden looper gjennom og presenterer post-komponenter. Skal hente info fra database:

{Object.values(entries).map(({ title, description }) => {
  return <InfoPost title={title} description={description} />;
})}{" "}

*/
