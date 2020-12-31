import express from "express";
import * as model from "../models/project";

interface newProjectRequest {
  title: string,
  startDate: string,
  endDate: string,
  description: string
}

async function getProject(req: express.Request, res: express.Response) {
  const { projectId, hackathonId, personId } = req.query as any;

  const queryResult = await model.getProject(projectId, hackathonId, personId);
  

  if (projectId)
    res.send(queryResult.rows[0]);
  else
    res.send(queryResult.rows);
}

async function createNewProject(req: express.Request, res: express.Response) {
  const { title, startDate, endDate, description }: newProjectRequest = req.body;

  try {
    await model.createNewProject(title, new Date(startDate), new Date(endDate), description);
    res.status(200).send({ status: "successful" });
  } catch (e) {
    res.status(500).send({ error: e });
  };
}

export { getProject, createNewProject };