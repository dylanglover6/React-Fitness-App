import { Col, Row, Container } from "../../components/Grid";
import React from 'react';
import SignInForm from '../../components/User/SignIn';
import SignUpForm from '../../components/User/SignUp';
import Jumbotron from "../../components/Jumbotron";
import './Landing.css';

const LandingPage = ({history}) =>
  <Jumbotron>
    <Container fluid>
      <div>
        <Row>
          <Col size="md-6 sm-12">
          
            <SignInForm history={history} />
          
          </Col>
          <Col size="md-6 sm-12">
            
            <SignUpForm history={history} />
          
          </Col>
        </Row>
      </div>
    </Container>
  </Jumbotron>
export default LandingPage;
