import express from "express";
import * as model from "../models/project";

interface newProjectRequest {
  title: string,
  startDate: string,
  endDate: string,
  description: string
}

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

async function createNewProject(req: express.Request, res: express.Response) {
  const { title, startDate, endDate, description }: newProjectRequest = req.body;

  try {
    await model.createNewProject(title, new Date(startDate), new Date(endDate), description);
    res.status(200).send({status: "successful"});
  } catch (e) {
    res.status(500).send({ error: e });
  };
}

export { getProject };