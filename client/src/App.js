import React, { Fragment } from "react";
import "./App.css";

//components
 import LoginButton from "./Components/Auth/LoginButton";
import LogoutButton from "./Components/Auth/LogoutButton";


function App() {
  return (
    <Fragment>
      <div className="container">
        <LoginButton />
        <LogoutButton />
      </div>
    </Fragment>
  );
}

export default App;
