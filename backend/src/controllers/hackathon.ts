import express from "express";
import { nextTick } from "process";
import * as model from "../models/hackathon";

interface newHackathonRequest {
  title: string,
  startDate: string,
  endDate: string,
  description: string
}

async function getAllHackathons(_: express.Request, res: express.Response) {
  const queryResult = await model.getAllHackathons();
  res.send(queryResult.rows);
};

async function getCurrentHackathons(_: express.Request, res: express.Response) {
  const queryResult = await model.getCurrentHackathons();
  res.send(queryResult.rows);
};

async function createNewHackathon(req: express.Request, res: express.Response) {
  const { title, startDate, endDate, description }: newHackathonRequest = req.body;

  try {
    await model.createNewHackathon(title, new Date(startDate), new Date(endDate), description);
    res.status(200).send({status: "successful"});
  } catch (e) {
    res.status(500).send({ error: e });
  };
}

export { getAllHackathons, getCurrentHackathons, createNewHackathon };