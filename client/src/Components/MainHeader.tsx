import React from "react";
import logo from "../Images/Msign.png";
import { musiquesFacebook, translateFrench } from "../Utils/Utils";

export default function Header() {
  return (
    <header className="main-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu">
        <a href={translateFrench}> French/ le français </a>
        <a href={musiquesFacebook}> Facebook </a>
      </nav>
    </header>
  );
}

/*
<a href="https://www.bt.no/">test link</a>

<img src={logo} className="App-logo" alt="logo" />
*/
