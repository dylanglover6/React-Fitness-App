import React from "react";
import { Link } from "react-router-dom"
import "./WorkoutCards2.css";
    
const WorkoutCards2 = props => (
    <div> 
      <div className="card2">
        <div className="img-container">
            <a onClick={() => props.selectWorkouts(props.workouts)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.workouts} src={props.image} />
            </a>
        </div>
        <Link 
            to= {{
                pathname: "/start-workout",
                query: {id: props.id}
        }}
        >   
                <span className="btn btn-danger">Start This Workout</span>
        </Link>   
    </div>
    </div>
);

export default WorkoutCards2;
