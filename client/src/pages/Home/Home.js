import React from 'react';
import withAuthorization from '../../components/User/withAuthorization';
import { Col, Row, Container } from "../../components/Grid";
import AccountPage from '../../components/User/Account';
import './Home.css';
import Jumbotron from '../../components/Jumbotron';
import StartWorkout from '../StartWorkout';
import ViewWorkouts from '../ViewWorkouts';
// import FavoritesList from '../../components/UserComponents/FavoritesList';
// import WeekHistory from '../../components/UserComponents/WeekHistory';
// import FullWorkoutHistory from '../../components/UserComponents/FullWorkoutHistory';

const HomePage = () =>
<Jumbotron>
  <Container fluid>
    <div>
      <h1>Home Page</h1>
      <p>The Home Page is accessible by every signed in user.</p>
    </div>
    <Row>
      <Col size="lg-6 sm-12">
        <h3>Start Workout Component</h3>
        <StartWorkout />
      </Col>
      <Col size="lg-6 sm-12">
        <h3>View Workouts Component</h3>
        <ViewWorkouts />
      </Col>
      <Col size="lg-6 sm-12">
        <h3>Favorite/Recent Workouts Component</h3>
        {/* <FavoritesList /> */}
      </Col>
      <Col size="lg-6 sm-12">
        <h3>User Stats/ Workout History Component</h3>
        {/* <WeekHistory />
        <FullWorkoutHistory /> */}
      </Col>
    </Row>
    <Row>
      <Col size="lg-12">
        <h3>User Profile/Sign Out/Edit Profile Form Component</h3>
        <Row>
          <Col size="lg-6 md-12">
            <AccountPage />
          </Col>
          <Col size="lg-6 md-12">
            <h3>Profile Info Here</h3>
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
  </Jumbotron>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);