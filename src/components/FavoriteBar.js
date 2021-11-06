import React from "react";
import FavoriteItem from "./FavoriteItem.js";

const FavoriteBar = (props) => {

    return (
        <article id="favorite-bar">
             <h2 className="favorites-header">Favorites ❤️</h2>
            {props.favPlays.map(p => <FavoriteItem play={p} key={p.id} removePlay={props.removePlay} viewPlay={props.viewPlay}/>)}
        </article>
    );
}

export default FavoriteBar;