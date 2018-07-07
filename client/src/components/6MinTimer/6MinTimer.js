import React from "react"
import "./6MinTimer.css";
import ReactCountdownClock from "react-countdown-clock";

const Timer = props => (
<ReactCountdownClock 
  seconds={props.timeLeft}
  color={props.timerColor}
  alpha={0.9}
  size={300}
  weight={25}
  onComplete={() => props.timerComplete()}
  paused= {props.pauseBoolean} />
)

export default Timer;

