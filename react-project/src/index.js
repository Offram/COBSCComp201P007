import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Bears from "./components/bears";
import NavBar from "./components/navBar";
import Home from "./components/home";
import BearDetails from "./components/bearDetails";

ReactDOM.render(
  <BrowserRouter>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" component={Home} />
      <Route exact path="/bears" component={Bears} />
      <Route exact path="/bears/:id" component={BearDetails} />
    </React.Fragment>
  </BrowserRouter>,
  document.getElementById("root")
);
