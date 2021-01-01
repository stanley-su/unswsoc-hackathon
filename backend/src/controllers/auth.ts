require("dotenv").config();
import express from "express";
import request from "superagent";

function loginSuccess(req: express.Request, res: express.Response) {
  if ((req as any)?.user) {
    res.json({
      success: true,
      message: "user has successfully authenticated",
      user: (req as any).user,
      cookies: req.cookies
    });
  }
};

function loginFail(req: express.Request, res: express.Response) {
  res.status(401).json({
    success: false,
    message: "user failed to authenticate."
  });
};

async function signinCallback(req: express.Request, res: express.Response) {
  const { query } = req;
  const { code } = query;

  if (!code) {
    return res.send({
      success: false,
      message: "Can not get code",
    });
  };

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
      res.send({ "accessToken": data.access_token });
    });
};

function getAccessToken(req: express.Request, res: express.Response) {
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
};

export { loginSuccess, loginFail, signinCallback, getAccessToken };