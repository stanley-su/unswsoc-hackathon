import express from "express";
import passport from "passport";

import projectRouter from "./routes/project";
import hackathonRouter from "./routes/hackathon";
import commentRouter from "./routes/comment";
import personRouter from "./routes/person";
import authRouter from "./routes/auth";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (_, res) => {
  res.send("Test123!");
});

app.use(express.json());
app.use(passport.initialize());
app.use("/project", projectRouter);
app.use("/hackathon", hackathonRouter);
app.use("/comment", commentRouter);
app.use("/person", personRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
