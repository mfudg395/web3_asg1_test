import React from 'react';
import * as cloneDeep from 'lodash/cloneDeep';

const PlayTextSearch = (props) => {

    const handleCloseClick = () => props.viewPlay(props.play.id);

    const handleFavoriteClick = () => props.favoritePlay(props.play.id);

    // on Randy's suggestion, taken from https://placeholder.com/
    const src = `https://via.placeholder.com/250.png/?text=${props.play.title.replace(/\s/g, '+')}`

    const handleOnChange = (e) => {
        const currSelection = cloneDeep(props.textSelection);
        if (e.target.name === "act") {
            currSelection.act = e.target.value;
        } else if (e.target.name === "scene") {
            currSelection.scene = e.target.value;
        } else if (e.target.name === "char") {
            currSelection.char = e.target.value;
        } else {
            console.log("didn't change act, scene, or character")
        }
        props.setTextSelection(currSelection);
    }

    return (
        <div className="details-general">
            <img src={src} alt={props.play.title} />
            <h2>{props.play.title}</h2>
            <select name="act" id="act" onChange={handleOnChange}>
                {props.playInfo.acts.map(act => <option value={act.name}>{act.name}</option>)}
            </select>
            <select name="scene" id="scene" onChange={handleOnChange}>
                {props.playInfo.acts.find(act => act.name === props.textSelection.act).scenes.map(s => <option value={s.name}>{s.name}</option>)}
            </select>
            <div>
                <select name="char" id="char" onChange={handleOnChange}>
                    <option value="allPlayers">ALL PLAYERS</option>
                    {props.playInfo.persona.map(p => <option value={p.player}>{p.player}</option>)}
                </select>
                <input type="text" placeholder="Search"></input>
            </div>
            <button className="details-close-button" onClick={handleCloseClick}>Close</button><button className="details-favorite-button" onClick={handleFavoriteClick}>❤️</button>
        </div>
    )
}

export default PlayTextSearch;