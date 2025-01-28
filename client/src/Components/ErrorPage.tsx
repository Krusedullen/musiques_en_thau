import React from "react";
import { useRouteError } from "react-router-dom";
import "../styles/layout/ErrorPage.scss";
import logo from "../Images/justM.png";

export default function ErrorPage() {
  const error: unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <img src={logo} alt="musique" className="logo" />
      <div className="card">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {(error as { status?: string })?.status||
              (error as Error)?.message}{(error)?": " : ""}
          </i>
          <i> 
            {(error as { statusText?: string })?.statusText ||
              (error as Error)?.message}
          </i>
        </p>
      </div>
    </div>
  );
}
