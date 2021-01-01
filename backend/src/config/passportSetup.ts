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
    const user = await userDb.getPerson(id);
    done(null, user);
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
      const query = await userDb.getPersonByGitHub(profile.id);
      const currentUser = query.rows;

      // create new user if the database doesn't have this user
      if (!currentUser.length) {
        await userDb.createPerson(profile.id);

        const query = await userDb.getPersonByGitHub(profile.id);
        const newUser = query.rows;

        if (newUser.length) {
          const sessionUser = {
            id: newUser[0].github_id,
            name: newUser[0].name
          }
          done(null, sessionUser);
        }
      }
      const sessionUser = {
        id: currentUser[0].github_id,
        name: currentUser[0].name
      }
      done(null, sessionUser);
    }
  )
);