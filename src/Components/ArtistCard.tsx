import React from "react";
//import silhouette from "../Images/silhouette.png";

type artistProps = {
  name: string;
  bio: string;
  id: string;
  avatarImage: string;
};
const ArtistCard: React.FC<artistProps> = ({ name, bio, id, avatarImage }) => {
  //får ikke til å gi key value :(
  return (
    <div className="artist-card" id={id} key={id}>
      <img src={process.env.PUBLIC_URL + avatarImage} alt="avatar"></img>
      <div className="artist-name">{name}</div>
      <div className="bio">{bio}</div>
    </div>
  );
};

export default ArtistCard;
        