import pool from "../dbConfig/dbConfig";

function getPerson(id: number) {
  return pool.query("SELECT * from person where person_id = $1", [id]);
};

function getLeaderBoard() {
  return pool.query(
    `
    SELECT
      pers.person_id, 
      pers.name, 
      count(project_id) as project_count
    FROM person pers
    LEFT OUTER JOIN PROJECT proj
    ON pers.person_id = proj.person_id
    GROUP BY pers.person_id
    `
  );
};

export { getPerson, getLeaderBoard };