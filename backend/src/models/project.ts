import pool from "../dbConfig/dbConfig";

function getAllProjects() {
  return pool.query("SELECT * from project");
};

function getSingleProject(projectId: string) {
  return pool.query("SELECT * from project where project_id = $1", [projectId]);
};

function getProjectsForHackathon(hackathonId: string) {
  return pool.query("SELECT * from project where hackathon_id = $1", [hackathonId]);
};

async function createNewProject(title: string, startDate: Date, endDate: Date, description: string="") {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    const insertText = `INSERT INTO project(title, description, startDate, endDate)
                        VALUES ($1, $2, $3, $4);`;
    const insertValues = [title, description, startDate, endDate];
    await client.query(insertText, insertValues);
    await client.query("COMMIT");
    client.release();
  } catch (e) {
    await client.query("ROLLBACK");
    client.release();
    throw e;
  };
};

export { getAllProjects, getSingleProject, getProjectsForHackathon, createNewProject };