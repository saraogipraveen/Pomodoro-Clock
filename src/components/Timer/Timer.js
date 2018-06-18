import React from 'react';
import './Timer.css';

const Timer = (props) => {
        let minutes = props.timeLeft.minutes;
        let seconds = props.timeLeft.seconds;
        minutes.toString().length === 1 ? minutes = "0" + minutes : null
        seconds.toString().length === 1 ? seconds = "0" + seconds : null
        let label = props.timerLabel
        label = label.charAt(0).toUpperCase() + label.slice(1);
        return (
            <div className="Timer">
                <h3 id="timer-label">{label} </h3>
                <p id="time-left">{minutes}:{seconds}</p>
            </div>
        );
}


export default Timer;