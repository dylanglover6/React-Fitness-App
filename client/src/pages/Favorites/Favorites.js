import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
//import Jumbotron from "../../components/Jumbotron";

import Wrapper from '../../components/Wrapper'
import Navigation from '../../components/Navigation'
import work_outs from '../../WorkOuts.json'
import WorkoutCards2 from '../../components/WorkoutCards2'

class Favorites extends Component {
  state = {
      cats: work_outs,
      unselectedCats: work_outs
      
  }

  componentDidMount() {
  }



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

      

  };


  render() {
    return (
        <div>

        <Navigation />
  <Container fluid>
    <Row>
      <Col size="md-12">
        

         
        

         <Wrapper>

           {
                    this.state.cats.map(cat => (
                        <WorkoutCards2
                            workouts={cat.workouts}
                            image={cat.image}
                            selectWorkouts={this.selectWorkouts} 
                            curScore={this.state.curScore}
                            id={cat.id}
                        />
                    ))
                }


         </Wrapper>
      </Col>
    </Row>
  </Container>

        </div>
);
  }
}

export default Favorites;
