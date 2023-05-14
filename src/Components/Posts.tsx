import React from "react";

export default function Posts() {
  return (
    <div className="posts">
      <div className="info-post">
        <h1 className="info-post-header">Dette er et innlegg</h1>
        <p>
          Dette er en testpost. Denne er hardkodet nå, men vi skal skrive om
          dette til en gjenbrukbar React komponent som henter ut data fra
          databasen vår (som vi skal lage) og setter de inn i komponenten
          dynamisk.
        </p>
      </div>
      <div className="info-post">
        <h1 className="info-post-header">Dette er et innlegg</h1>
        <p>
          Dette er en testpost. Denne er hardkodet nå, men vi skal skrive om
          dette til en gjenbrukbar React komponent som henter ut data fra
          databasen vår (som vi skal lage) og setter de inn i komponenten
          dynamisk.
        </p>
      </div>
    </div>
  );
}
