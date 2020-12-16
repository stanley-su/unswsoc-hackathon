import express from "express";
const router = express.Router();

import * as controller from "../controllers/hackathon";

router.get("/", controller.getAllHackathons);
router.get("/current", controller.getCurrentHackathons);

export default router;