import React from "react";
import { Row } from "react-bootstrap";
import "./WorkoutJumbotron.css"

const WorkoutJumbotron =  props  => (
  <div
    style={{ clear: "both", textAlign: "center" }}
    className="jumbotron"
  >
  <Row>
    <h1 className="titleText"> {props.workoutTitle} </h1>
  </Row>
  <Row>
    <h3 className="instructionsText"> {props.instructionsText} </h3>
    <h3 className="workoutText">{props.workoutText}</h3>
  </Row>
  </div>
);

export default WorkoutJumbotron;
