import pool from "../dbConfig/dbConfig";

function getAllHackathons() {
  return pool.query("SELECT * FROM hackathon");
};

function getCurrentHackathons() {
  return pool.query("SELECT * FROM hackathon WHERE end_date::date >= NOW()")
};

async function createNewHackathon(title: string, startDate: Date, endDate: Date, description: string="",) {
  const client = await pool.connect();

  (async () => {
    try {
      await client.query("BEGIN");
      const insertText = `INSERT INTO hackathon(title, description, start_date, end_date)
                          VALUES ($1, $2, $3, $4);`;
      const insertValues = [title, startDate, endDate, description];
      await client.query(insertText, insertValues);
      await client.query("COMMIT");
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  })().catch(e => console.error(e.stack));
}

export { getAllHackathons, getCurrentHackathons };