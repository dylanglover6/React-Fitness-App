import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Navbar from '../../components/Navbar';

class ViewWorkouts extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
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
      </div>
    );
  }
}

export default ViewWorkouts;
