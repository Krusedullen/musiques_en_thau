import React from "react";
import logo from "../Images/Msign.png";
import { musiquesFacebook, northSouthFacebook} from "../Utils/Utils";
import { LANGUAGES } from "../Utils/constants";

export default function Header(props: { changeLanguage: (arg0: string) => void; }) {
  
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    //console.log(lang_code);
    props.changeLanguage(lang_code);

  };

  return (
    <header className="main-header">
      <a href="https://musiquesenthau.com/" className="logo-link">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <nav className="menu">
        <a href={northSouthFacebook}>
        <picture className="nav-icon">
            <img
              src={process.env.PUBLIC_URL + "/images/northsouth_icon_round.png"}
              alt="facebook"
              className="nav-icon"
            />
        </picture>
        </a>
        <a href={musiquesFacebook}>
          <picture className="nav-icon">
            <source
              type="image/webp"
              srcSet={
                process.env.PUBLIC_URL + "/images/facebook_logo_icon.webp"
              }
            />
            <img
              src={process.env.PUBLIC_URL + "/images/facebook_logo_icon.png"}
              alt="facebook"
              className="nav-icon"
            />
          </picture>
        </a>
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
