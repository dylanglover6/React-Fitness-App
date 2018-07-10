import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Navbar from '../../components/Navbar/Navbar';

const UserHistory = () => (
  <div>
    <Navbar />
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>User History</h1>
            <h1>
              <span>
              WeekHistory Component Here
              </span>
            </h1>
            <h1>
              <span>
              FullWorkoutHistory Component Here
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </div>
);

export default UserHistory; 