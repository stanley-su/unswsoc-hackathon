import express from "express";
import * as model from "../models/hackathon";

async function getAllHackathons(_: express.Request, res: express.Response) {
  const queryResult = await model.getAllHackathons();
  res.send(queryResult.rows);
};

async function getCurrentHackathons(_: express.Request, res: express.Response) {
  const queryResult = await model.getCurrentHackathons();
  res.send(queryResult.rows);
};


export { getAllHackathons, getCurrentHackathons };