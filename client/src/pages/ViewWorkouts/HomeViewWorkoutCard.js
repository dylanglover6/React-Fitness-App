import React from "react";
import { Link } from "react-router-dom"
import { Image, Button } from 'react-bootstrap'
    
const HomeViewWorkoutCard = props => (
  
    <div className="smallCard" fluid> 

            <a fluid className="previewKit" onClick={() => props.selectWorkouts(props.workouts)} 
            >
                <Image className="homeCard" alt={props.workouts} src={props.image} id={props.id} responsive/>
            </a>
        <Link 
            to= {{
                pathname: "/start-workout",
                state: {id: props.id}
        }}
        >   
                <Button className="homeBtn" bsSize="xsmall" bsStyle="primary" block onClick={() => Window.X = props.id}>Start</Button>
        </Link>   
    </div>
    
);

export default HomeViewWorkoutCard;
