import express from "express";

import projectRouter from "./routes/project";
import hackathonRouter from "./routes/hackathon";

const app = express();
const port = 4000;

app.get("/", (_, res) => {
  res.send('Test123!');
});

app.use("/project", projectRouter);
app.use("/hackathon", hackathonRouter);

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
