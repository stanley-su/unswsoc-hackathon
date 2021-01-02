require("dotenv").config();
import express from "express";
import passport from "passport";
import cookieSession from "cookie-session";
import cookieParser from "cookie-parser";

const passportSetup = require("./config/passportSetup");

import projectRouter from "./routes/project";
import hackathonRouter from "./routes/hackathon";
import commentRouter from "./routes/comment";
import personRouter from "./routes/person";
import authRouter from "./routes/auth";

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());

app.use("/project", projectRouter);
app.use("/hackathon", hackathonRouter);
app.use("/comment", commentRouter);
app.use("/person", personRouter);
app.use("/auth", authRouter);

const authCheck = (req, res, next) => {
  if (!req.user) {
    res.status(401).json({
      authenticated: false,
      message: "user has not been authenticated"
    });
  } else {
    next();
  }
};

app.get("/", authCheck, (req, res) => {
  res.status(200).json({
    authenticated: true,
    message: "user successfully authenticated",
    user: req.user,
    cookies: req.cookies
  });
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
