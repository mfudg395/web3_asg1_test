import { isEmpty } from 'lodash';
import React from 'react';
// import HomeBrowser from "./HomeBrowser.js";
import PlayList from './PlayList.js';

const PlayBrowser = (props) => {
    return (
        <div className={props.favState ? "playBrowser" : "playBrowser playBrowser-fav-hidden"}>
            {!isEmpty(props.plays) ? <PlayList plays={props.plays} sortPlays={props.sortPlays} favoritePlay={props.favoritePlay} viewPlay={props.viewPlay} favState={props.favState}/> : <div className="grid-item">No plays found.</div>}
        </div>
    )
}

export default PlayBrowser;