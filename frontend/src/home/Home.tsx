import React, { useState, useEffect } from "react";
import { Container, CardColumns, Row, Col, Form, FormControl, Button } from "react-bootstrap";

import ProjectCard from "./ProjectCard";

function Home() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("/project");
      const json = await data.json();
      setProjects(json);
    })();
  });

  return (
    <Container
      className="mt-5"
    >
      <Row>
        <Col>
          <h2>Projects</h2>
        </Col>

        <Col>
          <Form 
            inline
            className="justify-content-end"  
          >
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
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