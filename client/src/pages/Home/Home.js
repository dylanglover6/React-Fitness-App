import React from 'react';
import withAuthorization from '../../components/User/withAuthorization';
import { Col, Row, Container } from "../../components/Grid";
import './Home.css';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Navigation from '../../components/Navigation';
// import FavoritesList from '../../components/UserComponents/FavoritesList';
// import WeekHistory from '../../components/UserComponents/WeekHistory';
// import FullWorkoutHistory from '../../components/UserComponents/FullWorkoutHistory';

const HomePage = () =>
<div className="background">
  <Navigation />
  
  <Container fluid>
    <Col size="sm-2"></Col>
    <Col size="sm-8">

      <Row>
        <Col size="sm-12">
        
          <div className="home componentsStyle">
            <Link to={routes.VIEW_WORKOUTS}>View Workouts</Link>

          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-6" >
          <div className="home componentsStyle">
              <Link to={routes.FAVORITE_WORKOUTS}>Favorite/Recent Workouts</Link>        
              {/* <FavoritesList /> */}
          </div>
        </Col>
        <Col size="sm-6" >
          <div className="home componentsStyle">
              <Link to={routes.USER_HISTORY}>User Stats/ Workout History</Link>
              {/* <WeekHistory />
              <FullWorkoutHistory /> */}
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-12" >
          <div className="home componentsStyle">
              <Link to={routes.USER_PROFILE}>Profile Info Here</Link>
          </div>      
        </Col>
      </Row>

    </Col>
    <Col size="sm-2"></Col>
  </Container>
</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);