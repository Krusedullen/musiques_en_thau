import React, { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../Components/MainHeader";

function App() {
  const [language, setLanguage] = useState("fr");
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="App">
      <Header changeLanguage={changeLanguage} />
      <Outlet context={language} />
    </div>
  );
}

export default App;
