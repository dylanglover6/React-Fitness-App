import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import Navigation from "../../components/Navigation";

const Favorites = () => (
  <div>
    <Navigation />  
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
  </div>
);

export default Favorites;
