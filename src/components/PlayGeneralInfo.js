import React from 'react';

const PlayGeneralInfo = (props) => {
    
    const handleCloseClick = () => props.viewPlay(props.play.id);

    const handleFavoriteClick = () => props.favoritePlay(props.play.id);

    // on Randy's suggestion, taken from https://placeholder.com/
    const src = `https://via.placeholder.com/250.png/?text=${props.play.title.replace(/\s/g, '+')}`

    return (
        <div className="details-general">
            <img src={src} alt={props.play.title} />
            <h2>{props.play.title}</h2>
            <p>{props.play.synopsis}</p>
            <button className="details-close-button" onClick={handleCloseClick}>Close</button><button className="details-favorite-button" onClick={handleFavoriteClick}>❤️</button>
        </div>
    )
}

export default PlayGeneralInfo;