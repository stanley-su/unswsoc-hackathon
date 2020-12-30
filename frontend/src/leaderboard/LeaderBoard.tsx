import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";

interface Person {
  user_id: number,
  name: string,
  project_count: number
}

function LeaderBoard() {
  const [leaderBoard, setLeaderBoard] = useState<Person[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetch("api/person");
      const json = await data.json();
      setLeaderBoard(json);
      console.log(json);
    })();
  }, []);

  return (
    <Container>
      <Row
        className="mt-5"
      >
        <Col>
          <h2>LeaderBoard</h2>
        </Col>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User</th>
            <th>Total Votes</th>
            <th>Total Projects</th>
          </tr>
        </thead>
        <tbody>
          {leaderBoard.map(person => (
            <tr>
              <th>{person.name}</th>
              <th>0</th>
              <th>{person.project_count}</th>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container >
  );
};

export default LeaderBoard;