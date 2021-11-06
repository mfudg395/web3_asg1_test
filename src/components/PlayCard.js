import React from 'react';

const PlayCard = (props) => {

    const handleFavoriteClick = () => {
        props.favoritePlay(props.play.id);
    }

    const handleViewClick = () => {
        props.viewPlay(props.play.id);
    }

    // on Randy's suggestion, taken from https://placeholder.com/
    const src = `https://via.placeholder.com/300.png/?text=${props.play.title.replace(/\s/g, '+')}`

    return (
        <div className="play-card">
            <img src={src} alt={props.play.title} className="play-card-image"/>
            <p className={props.favState ? "title-and-year-fav-visible" : "title-and-year"}>{props.play.title} ({props.play.likelyDate})</p>
            <div className="play-card-button-container">
                <button className={props.favState ? "view-button-fav-visible" : "view-button"} onClick={handleViewClick}>View</button><button className="favorite-button" onClick={handleFavoriteClick}>❤️</button>
            </div>
            
        </div>
    )
}

export default PlayCard;