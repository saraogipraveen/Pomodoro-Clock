import React from 'react';
import * as FontAwesome from 'react-icons/lib/fa';

const Controls = (props) => {

    const iconCss = {
        fontSize : '40px',
        padding : '10px',
        display:'inline-block'
    }

    return (
        <div>
            <p style={iconCss} onClick={props.startstop} id="start_stop">
                {props.timerRunning ? <FontAwesome.FaPause /> : <FontAwesome.FaPlay />}</p>
            <p style={iconCss} onClick={props.reset} id="reset"><FontAwesome.FaRetweet /></p>
        </div>
    );

}


export default Controls;