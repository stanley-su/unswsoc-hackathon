import express from "express";
const router = express.Router();

import * as controller from "../controllers/person";

router.get("/", controller.getPerson);
router.get("/leaderboard", controller.getLeaderBoard);

export default router;