import express from "express";
import * as model from "../models/person";

async function getLeaderBoard(_: express.Request, res: express.Response) {
  const queryResult = await model.getLeaderBoard();
  res.send(queryResult.rows);
};

export { getLeaderBoard };