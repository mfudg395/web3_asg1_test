import React from 'react';
import PlayScene from './PlayScene';

const PlayAct = (props) => {
    if (props.scene === "SCENE I") {
        return (
            <div className="details-text">
                <h2>{props.act.name}</h2>
                <PlayScene scene={props.act.scenes[0]} speaker={props.textSelection.char}/>
            </div>
        )
    } else if (props.scene === "SCENE II") {
        return (
            <div className="details-text">
                <h2>{props.act.name}</h2>
                <PlayScene scene={props.act.scenes[1]} speaker={props.textSelection.char}/>
            </div>
        )
    } else if (props.scene === "SCENE III") {
        return (
            <div className="details-text">
                <h2>{props.act.name}</h2>
                <PlayScene scene={props.act.scenes[2]}speaker={props.textSelection.char} />
            </div>
        )
    }
    
}

export default PlayAct;