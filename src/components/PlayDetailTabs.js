import React from 'react';
import PlayCharacter from './PlayCharacter';
import PlayText from './PlayText';
import Tabs from "./Tabs";

const PlayDetailTabs = (props) => {

    return (
        <div className="details-tabs">
            {props.hasPlayInfo ? // to display character and text tabs
                <Tabs setTextTabSelected={props.setTextTabSelected} >
                    <div label="Details">
                        <p><strong>Likely date of composition:</strong> {props.play.likelyDate}</p>
                        <p><strong>Genre:</strong> {props.play.genre}</p>
                        <p><a href={props.play.wiki}>Wiki</a> - <a href={props.play.gutenberg}>Gutenberg</a> - <a href={props.play.shakespeareOrg}>Shakespeare.org</a></p>
                        <p><strong>Description:</strong> {props.play.desc}</p>
                    </div>
                    <div label="Characters">
                        {props.playInfo.persona.map(c => <PlayCharacter character={c.player} key={c.player} />)}
                    </div>
                    <div label="Text">
                        {<PlayText text={props.playInfo} textSelection={props.textSelection} />}
                    </div>
                </Tabs>
                : // to only display details tab
                <Tabs setTextTabSelected={props.setTextTabSelected}>
                    <div label="Details">
                        <p><strong>Likely date of composition:</strong> {props.play.likelyDate}</p>
                        <p><strong>Genre:</strong> {props.play.genre}</p>
                        <p><a href={props.play.wiki}>Wiki</a> - <a href={props.play.gutenberg}>Gutenberg</a> - <a href={props.play.shakespeareOrg}>Shakespeare.org</a></p>
                        <p><strong>Description:</strong> {props.play.desc}</p>
                    </div>
                    <div label=""></div>{/* an empty tab is the only thing between me and my forever-sleep*/}
                </Tabs>
            }
        </div>
    )
}

export default PlayDetailTabs;