import React, { useState, useEffect } from "react";
import { Container, CardColumns, Row, Col, Form, FormControl, Button, Dropdown } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

function Home() {
  const [projects, setProjects] = useState([]);
  const [selectedHackathon, setSelectedHackathon] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetch("api/project");
      const json = await data.json();
      setProjects(json);
    })();
  }, []);

  return (
    <Container
      className="mt-5"
    >
      <Row>
        <Col sm={9}>
          <h2>Projects</h2>
        </Col>

        <Col sm={3}>
          <Form
            inline
          >
            <Form.Group
              style={{ display: "flex" }}
            >
              <Form.Label
                style={{ lineHeight: 2.5 }}
                className="mr-2"
              >
                <b>Hackathon:</b></Form.Label>
              <Form.Control as="select">
                <option>Hackathon 1</option>
                <option>Hackathon 2</option>
                <option>Hackathon 3</option>
                <option>Hackathon 4</option>
                <option>Hackathon 5</option>
              </Form.Control>
            </Form.Group>
          </Form>
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

export default Home;