import React from 'react';
import "./TextArea.css";

const TextArea = props => (
<div> 
  <span className="instructionsText"> {props.instructionsText} </span>
  <span className="workoutText">{props.workoutText}</span>
</div>
)

export default TextArea ;