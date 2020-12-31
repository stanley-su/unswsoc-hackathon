import React from "react";
import { Card } from "react-bootstrap";

interface Project {
  project_id: number;
  title: string;
  description: string;
  person_id: number;
  hackathon_id: number;
  submit_date: string;
};

function ProjectCard({ projectDetails }: { projectDetails: Project }) {
  const { project_id, title, description, person_id, hackathon_id, submit_date } = projectDetails;

  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Submitted by: {person_id} for {hackathon_id}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Card.Link href="/link-to-demo">Demo Link</Card.Link>
        <Card.Link href="/link-to-repo">Repo Link</Card.Link>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">{new Date(submit_date).toDateString()}</small>
      </Card.Footer>
    </Card>
  );
};

export default ProjectCard;