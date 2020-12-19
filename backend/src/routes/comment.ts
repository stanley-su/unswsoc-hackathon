import express from "express";
const router = express.Router();

import * as controller from "../controllers/comment";

router.get("/", controller.getComments);
router.post("/new", controller.makeComment);

export default router;