import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/MainHeader";

function App(props) {
  const language = props.language;
  return (
    <div className="App">
      <Header />
      <Outlet language={language} />
    </div>
  );
}

export default App;
