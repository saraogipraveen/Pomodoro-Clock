import React from 'react';

const Session = (props) => {

    return (
        <div>
            <h3 id="session-label">Session Length </h3>
            <div>
                <button id="session-decrement" onClick={props.decrementSession}>decrement</button>
                <p id="session-length">{props.sessionLength}</p>
                <button id="session-increment" onClick={props.incrementSession}>increment</button>
            </div>
        </div>
    );

}


export default Session;