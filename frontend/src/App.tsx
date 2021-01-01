import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NavBar from "./navbar/NavBar";
import Home from "./home/Home";
import Leaderboard from "./leaderboard/LeaderBoard";
import About from "./about/About";
import User from "./user/User";

function App() {
  useEffect(() => {
    (async () => {
      const code = window.location.search.split("=").length ? window.location.search.split("=")[1] : "";
      if (code) {
        const res = await fetch(`api/authentication/signin/callback?code=${code}`, {
          method: "POST"
        });
        const accessToken = await res.json();
      };
    })();
  }, []);

  return (
    <BrowserRouter>
      <NavBar />
      <a href="https://github.com/login/oauth/authorize?client_id=66b3981eb8fde7a08ffa">
        Sign In with GitHub
      </a>

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
  );
}

export default App;
