import React, { Component } from "react";
//import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
//import WorkoutCards from '../../components/WorkoutCards'
import cats from '../../WorkOuts.json'
import Wrapper from '../../components/Wrapper'
import Navpills from '../../components/Navpills'
//import Title from '../../components/Title'
import WorkoutCard from '../../components/WorkoutCards'


class ViewWorkouts extends Component {
  state = {
      message: "To select a workout, click an image.",
      topScore: 0,
      curScore: 0,
      cats: cats,
      unselectedCats: cats
      
  }

  

  componentDidMount() {
  }

  //shuffleArray = array => {
 //     for (let i = array.length - 1; i > 0; i--) {
 //         let j = Math.floor(Math.random() * (i + 1));
 //         [array[i], array[j]] = [array[j], array[i]];
 //     }
 // }

  selectHotpants = workouts => {
      const findCat = this.state.unselectedCats.find(item => item.workouts === workouts);

      if(findCat === undefined) {
          // failure to select a new workout
          this.setState({ 
              message: "You Already Added That Workout",
             
              cats: cats,
              unselectedCats: cats
          });
      }
      else {
          // success to select a new workout
          const newCats = this.state.unselectedCats.filter(item => item.workouts !== workouts);
          
          this.setState({ 
              message: "Workout Has Been Added To Your Faves",
              curScore: this.state.curScore + 1,
              cats: cats,
              unselectedCats: newCats
          });

          console.log(workouts);
      }

      //this.shuffleArray(cats);
  };

//class ViewWorkouts extends Component {
  
  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">

           <Navpills
                    message={this.state.message}
                    curScore={this.state.curScore}
                    topScore={this.state.topScore}
                />
                
              
          
                <Wrapper>
               
                
                {
                    this.state.cats.map(cat => (
                        <WorkoutCard
                            workouts={cat.workouts}
                            image={cat.image}
                            selectHotpants={this.selectHotpants} 
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
