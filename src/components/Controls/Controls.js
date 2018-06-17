import React from 'react';

const Controls = (props) => {

    return (
        <div>
            <button onClick={props.startstop} id="start_stop">startstop</button>
            <button onClick={props.reset} id="reset">reset</button>
        </div>
    );

}


export default Controls;