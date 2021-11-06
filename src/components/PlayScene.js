import React from 'react';
import PlaySpeech from './PlaySpeech';

const PlayScene = (props) => {
    let speakerSpeeches = props.scene.speeches;
    speakerSpeeches = speakerSpeeches.filter(speech => speech.speaker === props.speaker);
    if (props.speaker === "allPlayers") {
        return (
            <div>
                <h3>{props.scene.name}</h3>
                <hr/>
                <p>{props.scene.title}</p>
                <p><em>{props.scene.stageDirection}</em></p>
                {props.scene.speeches.map(sp => <PlaySpeech speech={sp} />)}
            </div>
        )
    } else if (speakerSpeeches.length === 0) {
        return (
            <div>
                <p>No text found for <em>{props.speaker}.</em></p>
            </div>
        )
    } else {
        return (
            <div>
                <h3>{props.scene.name}</h3>
                <hr/>
                <p>{props.scene.title}</p>
                <p><em>{props.scene.stageDirection}</em></p>
                {speakerSpeeches.map(sp => <PlaySpeech speech={sp} />)}
            </div>
        )
    }
    }
    

export default PlayScene;