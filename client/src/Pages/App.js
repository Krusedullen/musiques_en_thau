import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/MainHeader";
import MainFooter from './../Components/MainFooter';

function App() {
  const [language, setLanguage] = useState("fr");
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} />
      <Outlet context={language} />
      <MainFooter/>
    </div>
  );
}

export default App;
