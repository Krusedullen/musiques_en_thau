import React from "react";
import logo from "../Images/Msign.png";
import { musiquesFacebook} from "../Utils/Utils";
import { LANGUAGES } from "../Utils/constants";

export default function Header(props: { changeLanguage: (arg0: string) => void; }) {
  
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    //console.log(lang_code);
    props.changeLanguage(lang_code);

  };

  return (
    <header className="main-header">
      <img className="logo" src={logo} alt="logo" />
      <nav className="menu">
        <a href={musiquesFacebook}> Facebook </a>
        <select defaultValue={"fr"} onChange={onChangeLang}>
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

//later we can add links to about and home
<div>
        <NavLink className={isActive} to="/">
          {t("home")}
        </NavLink>
        <NavLink className={isActive} to="/about">
          {t("about")}
        </NavLink>
      </div>
*/
