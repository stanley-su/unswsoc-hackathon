import pool from "../dbConfig/dbConfig";

function getAllHackathons() {
  return pool.query("SELECT * FROM hackathon");
};

function getCurrentHackathons() {
  return pool.query("SELECT * FROM hackathon WHERE end_date::date >= NOW()")
};

export { getAllHackathons, getCurrentHackathons };