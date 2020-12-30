import express from "express";
import * as model from "../models/person";

async function getPerson(req: express.Request, res: express.Response) {
  const queryResult = await model.getPerson((req.query as any).id);
  res.send(queryResult.rows[0]);
};

async function getLeaderBoard(_: express.Request, res: express.Response) {
  const queryResult = await model.getLeaderBoard();
  res.send(queryResult.rows);
};

export { getLeaderBoard, getPerson };