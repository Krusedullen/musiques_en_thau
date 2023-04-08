import React from "react";
import logo from "../Images/Msign.png";
import "./Header.css";

export default function Header(props) {
  return (
    <header className="App-header">
      <img className="logo" src={logo} alt="logo" />
    </header>
  );
}

/*
<img src={logo} className="App-logo" alt="logo" />
*/
