import React from "react";
// import {useHistory} from 'react-router-dom';
import Countdown from "react-countdown";
import './Timer.css';


// function Home() {
//   const history = useHistory();
//     return <>{() => history.push('/')}</>;
//   }
  
// Random component
const Completionist = () => <span className="timer">Game Over!</span> 

// Renderer callback with condition
const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
};
  export default function Timer(){
      return (
        <Countdown date={Date.now() + 11000} renderer={renderer} precision={3} /> 
);  
  }
  
