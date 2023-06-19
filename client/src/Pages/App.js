import * as React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/MainHeader";

function App(props) {
  
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
