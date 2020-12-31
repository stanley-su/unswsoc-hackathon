import express from "express";
const router = express.Router();

import * as controller from "../controllers/auth";

router.get("/", controller.getAccessToken);
router.post("/signin/callback", controller.signinCallback);

export default router;