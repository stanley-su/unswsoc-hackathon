<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
>>>>>>> e56f08ac62caef2ef9b6d843ad5e7c16baf07060

import NavBar from "./navbar/NavBar";
import Home from "./home/Home";
import Leaderboard from "./leaderboard/LeaderBoard";
import About from "./about/About";
import User from "./user/User";

function App() {
  return (
<<<<<<< HEAD
    <>
      <Feature text={result} />
      <a href="https://github.com/login/oauth/authorize?client_id=79f0eb09798bde55df9e">
        Sign In with GitHub
      </a>
    </>
=======
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
        <Route path="/user/:id">
          <User />
        </Route>
      </Switch>
    </BrowserRouter>
>>>>>>> e56f08ac62caef2ef9b6d843ad5e7c16baf07060
  );
}

export default App;
