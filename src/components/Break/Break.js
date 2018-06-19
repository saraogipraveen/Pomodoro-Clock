import React from 'react';
import './Break.css';
import * as FontAwesome from 'react-icons/lib/fa';


const Break = (props) => {



    return (
        <div className="Break">
            <h3 id="break-label">Break Length </h3>
            <p id="break-decrement" onClick={props.decrementBreak}><FontAwesome.FaCaretDown /></p>
            <p id="break-length">{props.breakLength}</p>
            <p id="break-increment" onClick={props.incrementBreak}><FontAwesome.FaCaretUp /></p>
        </div>
    );

}

export default Break;