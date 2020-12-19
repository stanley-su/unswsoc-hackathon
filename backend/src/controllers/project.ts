import express from "express";
import * as model from "../models/project";

async function getProject(req: express.Request, res: express.Response) {
  if (req.query.projectId) {
    const queryResult = await model.getSingleProject((req.query as any).projectId);
    res.send(queryResult.rows);
  } else if (req.query.hackathonId) {
    const queryResult = await model.getProjectsForHackathon((req.query as any).hackathonId);
    res.send(queryResult.rows);
  } else {
    const queryResult = await model.getAllProjects();
    res.send(queryResult.rows);
  };
}

export { getProject };