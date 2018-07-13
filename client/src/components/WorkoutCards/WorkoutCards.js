import React from "react";
import "./WorkoutCards.css";

const WorkoutCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectWorkouts(props.workouts)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.workouts} src={props.image} />
            </a>
        </div>
    </div>
);

export default WorkoutCard;