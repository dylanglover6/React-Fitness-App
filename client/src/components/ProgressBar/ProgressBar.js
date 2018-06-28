import React from 'react';
import "./ProgressBar.css";
import CircularProgressBar from 'react-circular-progressbar';

const ProgressBar = props => (
  <div>
    <CircularProgressBar
      percentage={props.yourPercentage}
      styles={{
        path: { stroke: `rgba(62, 152, 199, ${props.yourPercentage / 100})` },
      }}
    />
    <span className="btn btn-danger" onClick={() => props.handleClick()}> click </span>
  </div>
  )

  export default ProgressBar ;
