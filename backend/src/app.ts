import express from "express";

import projectRouter from "./routes/project";

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
});

app.use("/project", projectRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
