import React from 'react';
import withAuthorization from '../../components/User/withAuthorization';
import { Col, Row, Container } from "../../components/Grid";
import './Home.css';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';
import Navigation from '../../components/Navigation';
import HomeViewWorkouts from '../ViewWorkouts/HomeViewWorkouts';
import { Image } from 'react-bootstrap';

const HomePage = () =>
<div className="background">
  <Navigation />
  
  <Container fluid>

    <Col size="sm-1"></Col>
    <Col size="sm-10">

          <div className="componentsStyle home">
      <Row>
        <Col size="sm-12">
            <HomeViewWorkouts /> 
        </Col>
      </Row>
          </div>

      <Row>
        <Col size="sm-6" >
          <div className="homeFave componentsStyle">
            <Row>
              <Col size="sm-2"></Col>
              <Col size="sm-8">
              <Link to={routes.FAVORITE_WORKOUTS}><span className="faveSpan">Favorite Workouts</span></Link>        
              </Col>
              <Col size="sm-2"></Col>
          </Row>
          </div>
        </Col>
        <Col size="sm-6" >
          <div className="homeHist componentsStyle">
            <Row>
              <Col size="sm-2"></Col>
              <Col size="sm-8">
              <Link to={routes.USER_HISTORY}><span className="faveSpan">History</span></Link>        
              </Col>
              <Col size="sm-2"></Col>
          </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col size="sm-12" >
        <div className="white">
            <Row>
              <Col size="sm-4">
                <div className="homeProf2 componentsStyle"></div>
              </Col>
              <Col size="sm-4">
                <div className="homeProf componentsStyle"></div>
              </Col>
              <Col size="sm-4">
                <div className="homeProf1 componentsStyle"></div>
              </Col>
          </Row>
        </div>
        </Col>
      </Row>

    </Col>
    <Col size="sm-1"></Col>

  </Container>
</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);