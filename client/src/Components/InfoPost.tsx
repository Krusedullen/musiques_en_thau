import React from "react";

type infoPostProps = {
  title: string;
  description: string;
};

const InfoPost: React.FC<infoPostProps> = ({ title, description }) => {
  return (
    <div className="info-post">
      <h1 className="info-post__header">{title}</h1>
      <p className="info-post__content">{description}</p>
    </div>
  );
};

export default InfoPost;