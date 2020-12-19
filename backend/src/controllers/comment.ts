import express from "express";
import * as model from "../models/comment";

interface newComment {
  projectId: number,
  userId: number,
  contents: string
};

async function getComments(req: express.Request, res: express.Response) {
  const queryResults = await model.getComments((req.query as any).projectId);
  res.send(queryResults);
};

async function makeComment(req: express.Request, res: express.Response) {
  const { projectId, userId, contents }: newComment = req.body;

  try {
    await model.makeComment(projectId, userId, contents);
    res.status(200).send({status: "successful"});
  } catch (e) {
    res.status(500).send({ error: e });
  };
};

export { getComments, makeComment };