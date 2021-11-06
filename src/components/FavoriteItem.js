import React from "react";

const FavoriteItem = (props) => {

    const handleClick = () => {
        props.removePlay(props.play);
    }

    const viewPlay = () => {
        console.log(props.play.id);
        props.viewPlay(props.play.id);
    }

    return (
        <span>
            <p className="favorite-item">
                <button className="remove-favorite" onClick={handleClick}>❌</button>
                <span>{props.play.title} ({props.play.likelyDate})</span>
            </p>
        </span>
    );
}

export default FavoriteItem;