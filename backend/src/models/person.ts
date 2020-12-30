import pool from "../dbConfig/dbConfig";

function getLeaderBoard() {
  return pool.query("SELECT * from person");
};

export { getLeaderBoard };