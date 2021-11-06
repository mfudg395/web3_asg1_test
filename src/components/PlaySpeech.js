import React from 'react';

const playSpeech = (props) => {
    return (
        <div>
            <h4>{props.speech.speaker}</h4>
            {props.speech.lines.map(line => <p>{line}</p> )}
        </div>
    )
}

export default playSpeech;