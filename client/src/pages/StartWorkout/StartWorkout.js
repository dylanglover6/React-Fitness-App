import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import ProgressBar from "../../components/ProgressBar";
import Timer from "../../components/6MinTimer";


class StartWorkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerColor: "#3e98c7",
      yourPercentage: 0,
      timeLeft: 10,
      timesRan: 0
    };
  }

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({ 
    [name]: value
    })
  };
    
  timerComplete() {
    
    // this.setState((prevState, props) => ({
      // timesRan : prevState.timesRan +1
    // }))
    this.setState({
      timesRan: this.state.timesRan += 1,
    });
    
    if (this.state.yourPercentage != 100) {  
      let newPercentage = this.state.yourPercentage += 20;
      let newTimer;
      console.log(this.state.timesRan)
        if (this.state.timesRan === 1 || this.state.timesRan === 3 || this.state.timesRan === 5 || this.state.timesRan === 7) 
        {
          newTimer = 5
          console.log("odd")
        }
        else if (this.state.timesRan === 2 || this.state.timesRan === 4 || this.state.timesRan === 6 || this.state.timesRan === 8 ) 
        {
          newTimer = 10
          console.log("even")
        }
        else {
          console.log("nope")
        }

        this.setState({
          yourPercentage: newPercentage,
          timeLeft: newTimer
        })
    }
  }


  render() {
    console.log(this.state);
    return (
      <Container fluid>
        <ProgressBar 
          yourPercentage = {this.state.yourPercentage}
        />
        <Timer 
          timeLeft = {this.state.timeLeft}
          timerColor = {this.state.timerColor}
          timerComplete = {this.timerComplete.bind(this)}   
          timesRan = {this.state.timesRan}  
        />
        
      </Container>
    );
  }
};

export default StartWorkout;
