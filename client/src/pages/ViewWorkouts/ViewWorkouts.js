import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
//import WorkoutCards from '../../components/WorkoutCards'
import work_outs from '../../WorkOuts.json'
import Wrapper from '../../components/Wrapper'
import Navpills from '../../components/Navpills'
//import Title from '../../components/Title'
import WorkoutCard from '../../components/WorkoutCards'
import Navigation from '../../components/Navigation'
import "./ViewWorkouts.css";



class ViewWorkouts extends Component {
  state = {
      message: "Click a Workout To Add it to Your Faves. ",
      topScore: 0,
      curScore: 0,
      cats: work_outs,
      unselectedCats: work_outs
      
  }

  

  componentDidMount() {
  }

  //shuffleArray = array => {
 //     for (let i = array.length - 1; i > 0; i--) {
 //         let j = Math.floor(Math.random() * (i + 1));
 //         [array[i], array[j]] = [array[j], array[i]];
 //     }
 // }
  
  


  selectWorkouts = workouts => {
      const findWorkout = this.state.unselectedCats.find(item => item.workouts === workouts);
     
 

      if(findWorkout === undefined) {
          // failure to select a new workout
          this.setState({ 
              message: "You Already Added That Workout",
             
              cats: work_outs,
              unselectedCats: work_outs
          });
      }
      else {
          // success to select a new workout
          const newWorkouts = this.state.unselectedCats.filter(item => item.workouts !== workouts);

          this.setState({ 
              message: "Workout Has Been Added To Your Faves",
              curScore: this.state.curScore + 1,
              cats: work_outs,
              unselectedCats: newWorkouts
          });
          console.log(workouts);
          console.log(findWorkout);


      }

      

      //this.shuffleArray(cats);
  };



//class ViewWorkouts extends Component {
  
  render() {
    return (
        



      <Container fluid>
        <Row>
          <Col size="md-12">

            <Navigation />
            <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    //topScore={this.state.topScore}
                />
           
           
              
          
                <Wrapper>
                
                {
                    this.state.cats.map(cat => (
                        <WorkoutCard
                            workouts={cat.workouts}
                            image={cat.image}
                            selectWorkouts={this.selectWorkouts} 
                            curScore={this.state.curScore}
                        />
                    ))
                }
            </Wrapper>

                

                
              
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ViewWorkouts;
