import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import work_outs from '../../WorkOuts.json'
import Wrapper from '../../components/Wrapper'
import WorkoutCard from '../../components/WorkoutCards'
import HomeViewWorkoutCard from "./HomeViewWorkoutCard";


class HomeViewWorkouts extends Component {
  state = {
      message: "Click a Workout To Add it to Your Faves. ",
      topScore: 0,
      curScore: 0,
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

            {
              this.state.cats.map(cat => (
                <HomeViewWorkoutCard
                  workouts={cat.workouts}
                  image={cat.image}
                  selectWorkouts={this.selectWorkouts} 
                  id={cat.id}
                  curScore={this.state.curScore}
                />
              ))
            }
    
      </div>
    );
  }
}

export default HomeViewWorkouts;
