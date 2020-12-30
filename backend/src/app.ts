import express from "express";

import projectRouter from "./routes/project";
import hackathonRouter from "./routes/hackathon";
import commentRouter from "./routes/comment";
import personRouter from "./routes/person";

const app = express();
const port = 4000;

app.use(express.json());
app.use("/project", projectRouter);
app.use("/hackathon", hackathonRouter);
app.use("/comment", commentRouter);
app.use("/person", personRouter);

app.get("/", (_, res) => {
  res.send('Test123!');
});

app.listen(port, () => {
  console.log(`Backend listening at http://localhost:${port}`);
});
