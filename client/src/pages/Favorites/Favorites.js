import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";

const Favorites = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Jumbotron>
          <h1>Favorites</h1>
          <h1>
            <span>
            FavoritesList Component Here
            </span>
          </h1>
        </Jumbotron>
      </Col>
    </Row>
  </Container>
);

export default Favorites;