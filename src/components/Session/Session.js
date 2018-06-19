import React from 'react';
import './Session.css';
import * as FontAwesome from 'react-icons/lib/fa';


const Session = (props) => {



    return (
        <div className="Session">
            <h3 id="session-label">Session Length </h3>
            <p id="session-decrement" onClick={props.decrementSession}><FontAwesome.FaCaretDown /></p>
            <p id="session-length">{props.sessionLength}</p>
            <p id="session-increment" onClick={props.incrementSession}><FontAwesome.FaCaretUp /></p>
        </div>
    );

}


export default Session;