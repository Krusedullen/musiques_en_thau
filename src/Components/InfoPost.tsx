import React from "react";

type infoPostProps = {
  title: string;
  description: string;
};

const InfoPost: React.FC<infoPostProps> = ({ title, description }) => {
  return (
    <div className="info-post">
      <h1 className="info-post-header">{title}</h1>
      <p className="info-post-content">{description}</p>
    </div>
  );
};

export default InfoPost;