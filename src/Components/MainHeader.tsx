import React from "react";
import logo from "../Images/Msign.png";
import { musiquesFacebook } from "../Utils/Utils";

export default function Header() {
  return (
    <header className="main-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu">
        <a href={musiquesFacebook}> Facebook </a>
        <a href="https://www.bt.no/">test link</a>
      </nav>
    </header>
  );
}

/*
<img src={logo} className="App-logo" alt="logo" />
*/
