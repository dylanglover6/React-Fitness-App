import React from "react";
import { Link } from "react-router-dom"
import "./WorkoutCards.css";
    
const WorkoutCard = props => (
    <div> 
      <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectWorkouts(props.workouts)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.workouts} src={props.image} id={props.id} />
            </a>
        </div>
      </div>
        <Link 
            to= {{
                pathname: "/start-workout",
                state: {id: props.id}
        }}
        >   
                <span className="btn btn-danger" onClick={() => Window.X = props.id}>Start This Workout</span>
        </Link>   
    </div>
);

export default WorkoutCard;
