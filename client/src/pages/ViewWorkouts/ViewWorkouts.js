import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";


class ViewWorkouts extends Component {
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>All Available Workouts</h1>
              <h1>
                <span>
                ViewWorkouts Component Here
                </span>
              </h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ViewWorkouts;
