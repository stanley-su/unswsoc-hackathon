import pool from "../dbConfig/dbConfig";

function getComments(projectId: number) {
  return pool.query("SELECT * FROM comment where project_id = $1", [projectId]);
};

async function makeComment(projectId: number, userId: number, contents: string) {
  const client = await pool.connect();

  try {
    await client.query("BEGIN");
    const insertText = `INSERT INTO comment(contents, project_id, person_id)
                        VALUES ('TEST COMMENT', 1, 1)`;
    const insertValues = [contents, projectId, userId];
    await client.query(insertText, insertValues);
    await client.query("COMMIT");
    client.release();
  } catch (e) {
    await client.query("ROLLBACK");
    client.release();
    throw e;
  };
};

export { getComments, makeComment };