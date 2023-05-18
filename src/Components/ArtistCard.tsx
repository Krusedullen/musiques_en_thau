import React from "react";

type artistProps = {
    name: string;
    bio: string;
}
const ArtistCard: React.FC<artistProps> = ({name, bio}) => {
    return (
        <div className="artist-card">
            <div className="artistName">{name}</div>
            <div className="bio">{bio}</div>

        </div>
    );
}

export default ArtistCard;
        