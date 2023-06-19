import React from "react";
import logo from "../Images/Msign.png";
import { musiquesFacebook, translateFrench } from "../Utils/Utils";
import { LANGUAGES } from "../Utils/constants";

export default function Header() {
  return (
    <header className="main-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu"> 
        <a href={musiquesFacebook}> Facebook </a>
        <select defaultValue={"es"}>
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>
      </nav>
    </header>
  );
}

/*
<a href="https://www.bt.no/">test link</a>
<a href={translateFrench}> french </a>
<img src={logo} className="App-logo" alt="logo" />
*/
