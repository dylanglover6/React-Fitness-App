import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import ProgressBar from "../../components/ProgressBar";
import Timer from "../../components/6MinTimer";
import API from "../../utils/Workouts/API";
import TextArea from "../../components/TextArea/TextArea";
import CurrentUser from '../../components/User/CurrentUser';
import WorkoutJumbotron from "../../components/WorkoutJumbotron";
import firebase from 'firebase';                                                 
import CompletedModal from "../../components/CompletedModal/CompletedModal";
import Navigation from "../../components/Navigation"
import "./StartWorkout.css"

class StartWorkout extends Component {
  constructor(props) {
    super(props);
      this.state = {
        timerColor: "#3e98c7",
        yourPercentage: 0,
        timeLeft: 60,
        timesRan: 0,
        pauseBoolean: false,
        buttonText: "Pause",
        workout: {},
        exerciseCounter: 0,
        instructionsText: "Let's Do:",
        isOpen: false,
        id: ""
      };
    
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ 
    [name]: value
    })
  };
  

  componentDidMount() {
    API.getWorkout("5b4827613cf7cf2c8406fa04")
      .then(res => {
        this.setState({
          workout: res.data
        })
      })
      .catch (err => console.log(err));
  }
    
  //runs when each timer finishes
  timerComplete() {
    
    console.log()
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
          newTimer = 15
          newColor = "#eb6864"
          nextExercise = this.state.exerciseCounter += 1 
          instructionsText = "Take a Break! Up Next:"
        }
        //exercise timer function, should be minute
        else if (this.state.timesRan === 2 || this.state.timesRan === 4 || this.state.timesRan === 6 || this.state.timesRan === 8 ) 
        {
          newPercentage = this.state.yourPercentage
          newTimer = 60
          newColor = "#3e98c7"
          instructionsText = "Let's Do:"
        }
        //completed timer
        else if (this.state.timesRan === 9) {
          newPercentage = 100
          newTimer = 0
          this.toggleModal()
          
        }

        this.setState({
          yourPercentage: newPercentage,
          timeLeft: newTimer,
          timerColor: newColor,
          instructionsText: instructionsText
        })
    }
  }


  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
      
    });
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
    let workoutTitle = "";
    if (this.state.workout.length > 0) {
      workoutText = this.state.workout[0].description[this.state.exerciseCounter]
      workoutTitle = this.state.workout[0].name
    }
    let containerStyle = {
      backgroundImage: 'url("https://images.unsplash.com/photo-1517344687790-7338f238f7f5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=60cbef02eb928db2f4ba8474f972cdb8&auto=format&fit=crop&w=700&q=60")'
    }
    return (
      <div className="background-class">
        <Container fluid style={containerStyle}>
        <Navigation />
          <WorkoutJumbotron
          workoutTitle={workoutTitle}
          workoutText={workoutText}
          instructionsText={this.state.instructionsText}
          />
          <CompletedModal
            userEmail= {<CurrentUser />}
            workoutTitle={workoutTitle}
            show={this.state.isOpen}
            onClose={this.toggleModal}
          />
          <div className="timerDiv">
            <Row>
          <Col size="md-2" />
            <Col size="md-5">
              <ProgressBar  
                yourPercentage = {this.state.yourPercentage}
                buttonText = {this.state.buttonText}
                handleClick = {this.handleClick}
                timerComplete = {this.timerComplete.bind(this)}
              />
            </Col>
            <Col size="md-4">  
              <Timer 
                timeLeft = {this.state.timeLeft}
                timerColor = {this.state.timerColor}
                timerComplete = {this.timerComplete.bind(this)}   
                timesRan = {this.state.timesRan}  
                pauseBoolean = {this.state.pauseBoolean}
              />
            </Col> 
            <Col size="md-1" />
            </Row>
          </div>   
        </Container>
      </div>
    );
  }
};

export default StartWorkout;
