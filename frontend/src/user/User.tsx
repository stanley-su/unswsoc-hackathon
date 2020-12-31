import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, CardColumns } from "react-bootstrap";
import { useParams } from "react-router-dom";

import ProjectCard from "../projectCard/ProjectCard";

interface UserURLParams {
  id: string
};

interface UserDetails {
  person_id: number,
  name: string
};

function User() {
  const id = useParams<UserURLParams>().id;
  const [userDetails, setUserDetails] = useState<UserDetails>({} as UserDetails);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = await fetch(`/api/person?id=${id}`);
      const userJSON = await userData.json();
      setUserDetails(userJSON);

      const projectsData = await fetch(`/api/project?personId=${id}`);
      const projectsJSON = await projectsData.json();
      setProjects(projectsJSON);
    })();
  }, []);

  return (
    <Container className="mt-3">
      <Row>
        <Col>
          <h2 className="text-center">
            {userDetails.name}
          </h2>
        </Col>
      </Row>
      <Row className="mt-3">
        <Table
          size="sm"
          className="ml-3 mr-3"
        >
          <thead>
            <tr>
              <th style={{ width: "10%" }}>ID</th>
              <th style={{ width: "50%" }}>GitHub</th>
              <th style={{ width: "20%" }}># Projects</th>
              <th style={{ width: "20%" }}># Votes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>{userDetails.person_id}</th>
              <th><a href={`https://github.com/V-Wong`}>Placeholder</a></th>
              <th>100</th>
              <th>100</th>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row className="mt-3">
        <Col>
          <h3>Projects</h3>
        </Col>
      </Row>

      <CardColumns
        className="mt-3"
      >
        {projects.map(project => (
          <ProjectCard projectDetails={project} />
        ))}
      </CardColumns>
    </Container>
  );
};

export default User;