import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Home from "./home/Home";
import Leaderboard from "./leaderboard/LeaderBoard";
import About from "./about/About";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
