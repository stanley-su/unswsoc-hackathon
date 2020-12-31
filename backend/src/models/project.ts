import pool from "../dbConfig/dbConfig";

function getProject(projectId: number=null, hackathonId: number=null, personId: number=null) {
  return pool.query(
    `
    SELECT * 
    FROM project 
    WHERE project_id = COALESCE($1, project_id) 
          and hackathon_id = COALESCE($2, hackathon_id)
          and person_id = COALESCE($3, person_id)
    `
  , [projectId, hackathonId, personId]);
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

export { getProject, createNewProject };