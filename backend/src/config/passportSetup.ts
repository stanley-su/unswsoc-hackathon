require("dotenv").config();
import passport from "passport";
import GitHubStrategy from "passport-github2";
import * as userDb from "../models/person";

// serialize the user.id to save in the cookie session
// so the browser will remember the user when login
passport.serializeUser((user, done) => {
  done(null, (user as any).id);
});

// deserialize the cookieUserId to user in the database
passport.deserializeUser(async (id: number, done) => {
  try {
    const user = await userDb.getPersonByGitHub(id);
    done(null, user.rows[0]);
  } catch (e) {
    done(new Error("Failed to deserialize an user"));
  }
});

passport.use(
  //@ts-ignore
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      // find current user in UserModel
      const user = await userDb.getPersonByGitHub(profile.id);

      // create new user if the database doesn't have this user
      if (!user.rows.length) {
        await userDb.createPerson(profile.id);
        const user = await userDb.getPersonByGitHub(profile.id);

        if (user.rows.length) {
          done(null, user.rows[0]);
        }
      }
      done(null, user.rows[0]);
    }
  )
);