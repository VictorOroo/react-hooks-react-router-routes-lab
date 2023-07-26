import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import ActorsPage from "./Actors";
import DirectorsPage from "./Directors";
import MoviesPage from "./Movies";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/actors" component={ActorsPage} />
        <Route path="/directors" component={DirectorsPage} />
        <Route path="/movies" component={MoviesPage} />
      </Switch>
    </div>
  );
}

export default App;
