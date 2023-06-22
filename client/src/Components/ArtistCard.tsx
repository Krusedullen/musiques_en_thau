import React from "react";
//import silhouette from "../Images/silhouette.png";

type artistProps = {
  name: string;
  bio: string;
  id: string;
  avatarImage: string;
  artistpage?: string;
};


const ArtistCard: React.FC<artistProps> = ({
  name,
  bio,
  id,
  avatarImage,
  artistpage,
}) => {
  return (
    <div className="artist-card" id={id} key={id}>
      <a href={artistpage}>
        <picture className="artist-img">
          <source
            className="artist-img"
            type="image/webp"
            srcSet={process.env.PUBLIC_URL + avatarImage + ".webp"}
          />
          <source
            className="artist-img"
            type="image/jpeg"
            srcSet={process.env.PUBLIC_URL + avatarImage + ".jpg"}
          />
          <source
            className="artist-img"
            type="image/png"
            srcSet={process.env.PUBLIC_URL + avatarImage + ".png"}
          />
          <img
            className="artist-img"
            src={process.env.PUBLIC_URL + avatarImage + ".jpg"}
            alt="avatar"
          ></img>
        </picture>
        <div className="artist-name">{name}</div>
      </a>
      <div className="bio">{bio}</div>
    </div>
  );
};

export default ArtistCard;

