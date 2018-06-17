import React from 'react';

const Break = (props) => {

    return (
        <div className="Break">
            <h3 id="break-label">Break Length </h3>
            <div className="break-data">
                <button id="break-decrement" onClick={props.decrementBreak}>decrement</button>
                <p id="break-length">{props.breakLength}</p>
                <button id="break-increment" onClick={props.incrementBreak}>increment</button>
            </div>
        </div>
    );

}

export default Break;