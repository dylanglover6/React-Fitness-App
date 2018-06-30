import React from 'react';
import withAuthorization from '../../components/User/withAuthorization';
import { Col, Row, Container } from "../../components/Grid";
import AccountPage from '../../components/User/Account';
import './Home.css';
import Jumbotron from '../../components/Jumbotron';
import ViewWorkouts from '../ViewWorkouts';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../../constants/routes';

// import FavoritesList from '../../components/UserComponents/FavoritesList';
// import WeekHistory from '../../components/UserComponents/WeekHistory';
// import FullWorkoutHistory from '../../components/UserComponents/FullWorkoutHistory';

const HomePage = () =>
<Jumbotron>
  <Container fluid>
    <Row>
      <Col size="md-6 sm-12" backgroundImage="https://www.nichemarket.co.za/wp-content/uploads/2017/08/fitness-hashtags-1.jpg">
        <Link to={routes.START_WORKOUT}>Start Workout</Link>

      </Col>
      <Col size="md-6 sm-12" backgroundImage="http://d1nnx3nhddxmeh.cloudfront.net/wp-content/uploads/2018/05/01122827/fitness-goals-achieve_feature.png">
      <Link to={routes.VIEW_WORKOUTS}>View Workouts</Link>
      </Col>
    </Row>
    <Row>
      <Col size="md-6 sm-12" backgroundImage="https://www.t-nation.com/system/publishing/article_assets/1213/original/Plank.jpg?ts=1418675477">
        <Link to={routes.FAVORITE_WORKOUTS}>Favorite/Recent Workouts</Link>
        {/* <FavoritesList /> */}
      </Col>
      <Col size="md-6 sm-12" backgroundImage="http://cdn-img.health.com//sites/default/files/wp_migrated_images/exhausted-from-exercise-400x400.jpg">
        <Link to={routes.USER_HISTORY}>User Stats/ Workout History</Link>
        {/* <WeekHistory />
        <FullWorkoutHistory /> */}
      </Col>
    </Row>
    <Row>
      <Col size="md-6 sm-12">
      <h3>Sign Out/Edit Profile Form</h3>
        <AccountPage />
      </Col>
      <Col size="md-6 sm-12" backgroundImage="https://support.jefit.com/hc/en-us/article_attachments/201909320/Screen_Shot_2015-01-12_at_12.04.07_PM.png">
        <Link to={routes.USER_PROFILE}>Profile Info Here</Link>
      </Col>
    </Row>
  </Container>
</Jumbotron>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);