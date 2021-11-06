import React, { useState } from 'react';
import '../assets/css/HomeBrowser.css';
import { Link } from 'react-router-dom';
import HomeHeroImage from '../assets/images/home-hero-image.jpg';
import { CSSTransition } from 'react-transition-group';

/**
 * The HomeBrowser is the box on the homepage that allows the user to search for plays
 * upon first loading the website. 
 */
const HomeBrowser = function (props) {
    
    const [input, setInput] = useState("");

    const handleSearch = () => props.searchPlays(input);

    const handleSearchAll = () => props.searchAllPlays();

    return (
        <div>
            <img src={HomeHeroImage} className="HomeHeroImage" alt="Bookshelf with Books" />

            <CSSTransition
                classNames="example"
                timeout={{ enter: 500, exit: 300, appear: 1000 }}
                appear={true}
                enter={false}
                exit={false}
                in={true}>
                <div className="HomeBrowserContainer">

                    <label htmlFor="title-input" id="title-label">Title</label>
                    <input type="text" id="title-input" placeholder="Search plays" onInput={e => setInput(e.target.value)}></input>
                    <div className="line-break"></div>
                    <Link to='/browse'>
                        <button onClick={handleSearch} id="matching-plays-button" className="search-button">Search Matching Plays</button>
                        <button onClick={handleSearchAll} id="all-plays-button" className="search-button" >Search All Plays</button>
                    </Link>
                    <div className="line-break"></div>
                    {/* https://unsplash.com/photos/YLSwjSy7stw */}
                    <div>Hero image credit: Alfons Morales, unsplash.com</div>
                </div>
            </CSSTransition>
        </div>
    )
}
export default HomeBrowser;