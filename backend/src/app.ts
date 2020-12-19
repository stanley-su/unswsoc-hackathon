import express from "express";
import request from "superagent";

import projectRouter from "./routes/project";

require("dotenv").config();

const app = express();
const port = 4000;

app.get("/", (_, res) => {
  res.send("Test123!");
});

app.get("/user/signin/callback", (req, res, next) => {
  const { query } = req;
  const { code } = query;

  if (!code) {
    return res.send({
      success: false,
      message: "Can not get code",
    });
  }

  request
    .post("https://github.com/login/oauth/access_token")
    .send({
      client_id: process.env.GITHUB_CLIENT_ID,
      client_secret: process.env.GITHUB_CLIENT_SECRET,
      code: code,
    })
    .set("Accept", "application/json")
    .then(function (result) {
      const data = result.body;

      res.cookie("session", data.access_token);
      res.redirect("http://localhost:3000");
    });
});

app.get("/user", (req, res, next) => {
  const accessToken = req.headers.cookie.split("session=")[1];

  request
    .get("https://api.github.com/user")
    .set("Authorization", "token " + accessToken)
    .set("User-Agent", "Mozilla/5.0")
    .then(function (result) {
      res.send(result.body);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use("/project", projectRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
