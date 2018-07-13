import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ProgressBar from "../../components/ProgressBar";
import Timer from "../../components/6MinTimer";
import API from "../../utils/Workouts/API";
import TextArea from "../../components/TextArea/TextArea";


class StartWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerColor: "#3e98c7",
      yourPercentage: 0,
      timeLeft: 10,
      timesRan: 0,
      pauseBoolean: false,
      buttonText: "Pause",
      workout: {},
      exerciseCounter: 0,
      instructionsText: ""
    };
  }
   
  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ 
    [name]: value
    })
  };
  

  componentDidMount() {
    API.getWorkouts()
      .then(res => {
        this.setState({
          workout: res.data
        })
      })
      .catch (err => console.log(err));
      
  }
    
  
  //runs when each timer finishes
  timerComplete() {
    
    console.log(this.state.workout[0])
    this.setState({
      timesRan: this.state.timesRan += 1,
    });
    //verifys that progress bar isnt full
    if (this.state.yourPercentage != 100) {  
      let newPercentage
      let newTimer;
      let newColor;
      let nextExercise;
      let instructionsText;
        //break function, should be 15 seconds
        if (this.state.timesRan === 1 || this.state.timesRan === 3 || this.state.timesRan === 5 || this.state.timesRan === 7) 
        {
          newPercentage = this.state.yourPercentage += 20
          newTimer = 5
          newColor = "#eb6864"
          nextExercise = this.state.exerciseCounter += 1 
          instructionsText = "Take a Break! Up Next:"
        }
        //exercise timer function, should be minute
        else if (this.state.timesRan === 2 || this.state.timesRan === 4 || this.state.timesRan === 6 || this.state.timesRan === 8 ) 
        {
          newPercentage = this.state.yourPercentage
          newTimer = 10
          newColor = "#3e98c7"
        }
        //last 5 min timer
        else if (this.state.timesRan === 9) {
          newPercentage = 100
          newTimer = 0
        }

        this.setState({
          yourPercentage: newPercentage,
          timeLeft: newTimer,
          timerColor: newColor,
          instructionsText: instructionsText
        })
    }
  }
  
  //pause/play button
  handleClick = () => {
    if (this.state.pauseBoolean === false) {
      this.setState({
        pauseBoolean: true,
        buttonText: "Start"
        
      })
    } 
    else {
      this.setState({
        pauseBoolean: false,
        buttonText: "Pause"
      })
    }
  }

  render() {
    let workoutText = "";
    if (this.state.workout.length > 0) {
      workoutText = this.state.workout[0].description[this.state.exerciseCounter]
    }
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <ProgressBar 
              yourPercentage = {this.state.yourPercentage}
              buttonText = {this.state.buttonText}
              handleClick = {this.handleClick}
              timerComplete = {this.timerComplete.bind(this)}
            />
            <TextArea
              instructionsText={this.state.instructionsText}
              workoutText={workoutText}
            />
            <Timer 
              timeLeft = {this.state.timeLeft}
              timerColor = {this.state.timerColor}
              timerComplete = {this.timerComplete.bind(this)}   
              timesRan = {this.state.timesRan}  
              pauseBoolean = {this.state.pauseBoolean}
            />
          </Col>
        </Row>  
      </Container>
    );
  }
};

export default StartWorkout;
