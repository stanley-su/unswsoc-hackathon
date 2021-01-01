import express from "express";
import passport from "passport";

const router = express.Router();

import * as controller from "../controllers/auth";

const CLIENT_HOME_PAGE_URL = "http://localhost:3001";

router.get("/", controller.getAccessToken);
router.get("login/success", controller.loginSuccess);
router.get("login/failed", controller.loginSuccess);
router.get("/github", passport.authenticate("github", { scope: [ 'user:email' ] }));
router.get("/github/callback", passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
        res.redirect(CLIENT_HOME_PAGE_URL);
    }
);

export default router;