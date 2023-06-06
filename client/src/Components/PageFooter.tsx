import React from "react";
import { musiquesFacebook } from "../Utils/Utils";

export default function Footer() {
  return (
    <footer className="page-footer">
      <p>
        <a href={musiquesFacebook}> Facebook </a>
        <br />
        <a href={musiquesFacebook}> Some link </a>
      </p>

      <p className="page-footer__author">
        Website developed by
        <br />
        Therese S. Bjørknes & Eirin S. Bjørknes
      </p>
    </footer>
  );
}
