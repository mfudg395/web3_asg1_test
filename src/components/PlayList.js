import _ from 'lodash';
import React from 'react';
import PlayCard from './PlayCard';

const PlayList = (props) => {

    const handleSort = (e) => {
        if (e.currentTarget.name == "title") {
            props.sortPlays("title");
        } else {
            props.sortPlays("year");
        }
    }

    return (
        <div className="plays-list grid-item">
            <div className="sort-container">
                <h2 className="inline-block">Sort by:</h2>
                <button className="sort-title-button" name="title" onClick={handleSort}>Title</button>
                <button className="sort-year-button" name="year" onClick={handleSort}>Year</button>
            </div>
            {props.plays.map(p => <PlayCard play={p} key={p.id} favoritePlay={props.favoritePlay} viewPlay={props.viewPlay} favState={props.favState}/>)}
        </div>
    )
}

export default PlayList;