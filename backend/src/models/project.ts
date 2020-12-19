import pool from "../dbConfig/dbConfig";

function getAllProjects() {
  return pool.query("SELECT * from project");
};

function getSingleProject(projectId: string) {
  return pool.query("SELECT * from project where project_id = $1", [projectId]);
};

function getProjectsForHackathon(hackathonId: string) {
  return pool.query("SELECT * from project where hackathon_id = $1", [hackathonId]);
}

export { getAllProjects, getSingleProject, getProjectsForHackathon };