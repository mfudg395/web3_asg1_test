import React from "react";
import Logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom'; 

const Header = (props) => {

    const handleClick = () => {
        props.aboutOnClick();
    }

    return (
        <header className="list-view-header">
            <div className="flex-container flex-vertical-center">
                {/* <!-- logo source: https://toppng.com/free-image/experience-the-discussion-online-library-book-logo-PNG-free-PNG-Images_189362 --> */}
                <Link to="/home">
                    <img src={Logo} title="Book Logo" alt="Book Logo" className="site-logo" />
                </Link>
                <button className="about-button" onClick={handleClick}>About</button>
            </div>
        </header>
    );
}

export default Header;