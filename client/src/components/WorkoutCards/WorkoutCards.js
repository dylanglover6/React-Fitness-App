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
);

export default WorkoutCard;

// ******************************************************
// *************** Daniel's Code Below ******************
// ******************************************************

// import "./WorkoutCards.css";

// <Card>
//   <CardHeader>
//     <CardTitle>Title goes here</CardTitle>
//   </CardHeader>
//   <CardMedia 
//     style={{
//       backgroundImage: 'url("/card_bg.jpg")',
//       height: '300px',
//       backgroundSize: 'cover',
//     }
//   />
//   <CardText>
//     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//   </CardText>
//   <CardActions>
//     <Button compact >action 1</Button>
//     <Button compact >action 2</Button>
//   </CardActions>
// </Card>
