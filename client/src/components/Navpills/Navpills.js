import React from "react";
import "./Navpills.css";

const Navpills = props => (
    <div>

        <ul className="nav nav-pills nav-justified">
            
            
            
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                    "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
                {props.message}
            </li>
            <li>Workouts Added: <span style={{color: "yellow"}}>{props.curScore}</span> | Total Workouts: {props.topScore}</li>
        </ul>
    </div>
);

export default Navpills;
