import React from "react";
import logo from "../Images/Msign.png";
import "../styles/layout/MainHeader.scss";
import {figmaSkisse} from "../Utils";

export default function Header(props) {
  return (
    <header className="Main-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu">
        <a href={figmaSkisse}> figma skisse </a>
      <a href="https://www.bt.no/">bt </a></nav>
    </header>
  );
}

/*
<img src={logo} className="App-logo" alt="logo" />
*/
