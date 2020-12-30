import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

interface UserURLParams {
  id: string
};

function User() {
  const id = useParams<UserURLParams>().id;

  return (
    <Container>
    </Container>
  );
};

export default User;