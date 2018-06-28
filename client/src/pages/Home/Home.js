import React from 'react';
import withAuthorization from '../../components/User/withAuthorization';
import { Col, Row, Container } from "../../components/Grid";
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import SignOutButton from '../../components/User/SignOut';

const HomePage = () =>
<Container fluid>
  <div>
    <h1>Home Page</h1>
    <p>The Home Page is accessible by every signed in user.</p>
  </div>
  <Row>
    <Col size="lg-3 md-6 sm-12">
      <h3>Start Workout Component</h3>
    </Col>
    <Col size="lg-3 md-6 sm-12">
      <h3>View Workouts Component</h3>
    </Col>
    <Col size="lg-3 md-6 sm-12">
      <h3>Favorite/Recent Workouts Component</h3>
    </Col>
    <Col size="lg-3 md-6 sm-12">
      <h3>User Stats/ Workout History Component</h3>
    </Col>
  </Row>
  <Row>
    <Col size="lg-12">
      <h3>User Profile/Sign Out/Edit Profile Form Component</h3>
      <ul>
        <li><Link to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton /></li>
      </ul>
    </Col>
  </Row>
  </Container>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);