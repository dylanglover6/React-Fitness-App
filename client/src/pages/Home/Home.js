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
    <Row>
      <Col size="md-6 sm-12" backgroundImage="https://www.nichemarket.co.za/wp-content/uploads/2017/08/fitness-hashtags-1.jpg">
        <h3>Start Workout Component</h3>
        <StartWorkout />
      </Col>
      <Col size="md-6 sm-12" backgroundImage="http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2018/05/01122827/fitness-goals-achieve_feature.png">
        <h3>View Workouts Component</h3>
        <ViewWorkouts />
      </Col>
    </Row>
    <Row>
      <Col size="md-6 sm-12" backgroundImage="https://www.t-nation.com/system/publishing/article_assets/1213/original/Plank.jpg?ts=1418675477">
        <h3>Favorite/Recent Workouts Component</h3>
        {/* <FavoritesList /> */}
      </Col>
      <Col size="md-6 sm-12" backgroundImage="http://cdn-img.health.com//sites/default/files/wp_migrated_images/exhausted-from-exercise-400x400.jpg">
        <h3>User Stats/ Workout History Component</h3>
        {/* <WeekHistory />
        <FullWorkoutHistory /> */}
      </Col>
    </Row>
    <Row>
      <Col size="md-6 sm-12">
      <h3>Sign Out/Edit Profile Form Component</h3>
        <AccountPage />
      </Col>
      <Col size="md-6 sm-12" backgroundImage="https://support.jefit.com/hc/en-us/article_attachments/201909320/Screen_Shot_2015-01-12_at_12.04.07_PM.png">
        <h3>Profile Info Here</h3>
      </Col>
    </Row>
  </Container>
</Jumbotron>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);