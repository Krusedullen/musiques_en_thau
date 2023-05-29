import React from "react";
import silhouette from "../Images/silhouette.png";

type artistProps = {
    name: string;
    bio: string;
}
const ArtistCard: React.FC<artistProps> = ({name, bio}) => {
    return (
        <div className="artist-card">
            <img src={silhouette} alt="placeholder"></img>
            <div className="artist-name">{name}</div>
            <div className="bio">{bio}</div>

        </div>
    );
}

export default ArtistCard;
        