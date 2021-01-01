import express from "express";
import passport from "passport";

const router = express.Router();

import * as controller from "../controllers/auth";

const CLIENT_HOME_PAGE_URL = "http://localhost:3001";

router.get("/", controller.getAccessToken);
router.get("login/success", controller.loginSuccess);
router.get("login/failed", controller.loginSuccess);
router.get("/github", passport.authenticate("github"));
router.post("/github/redirect", passport.authenticate("github", {
    successRedirect: CLIENT_HOME_PAGE_URL,
    failureRedirect: "/auth/login/failed"
}));

export default router;