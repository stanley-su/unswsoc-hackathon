import React, { useState, useEffect } from "react";
import { Container, CardColumns } from "react-bootstrap";

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
      <CardColumns>
        {projects.map(project => (
          <ProjectCard projectDetails={project} />
        ))}
      </CardColumns>
    </Container>
  );
};

export default Home;