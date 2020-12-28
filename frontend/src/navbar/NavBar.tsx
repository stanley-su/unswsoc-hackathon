import React from "react";
import { Navbar, Nav, Form, FormControl, Button, Container } from "react-bootstrap";

function NavBar() {
  return (
    <Navbar
      bg="white"
      expand="lg"
      className="border-bottom box-shadow"
    >
      <Container>
        <Navbar.Brand href="/">UNSWSoc Hackathon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        <Form inline>
          <Button variant="outline-primary">Login</Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default NavBar;