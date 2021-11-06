import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './about.css';

const About = (props) => {

    const handleClose = () => {
        props.closeModal();
    }

    return (
        <article className="modal-main">
            <h1>About</h1>
            <p>Group Members: Anthony Dang, Matthew Fudge, Nahuel Paladino</p>
            <p>GitHub Link: <a href="https://github.com/npala043/web3_asg1">https://github.com/npala043/web3_asg1</a></p>
            <p>Technology Used: Laptops, Mice, Our Noggins</p>
            <p>Third-Party Source Code:</p>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                    <li>d</li>
                </ul>
            
            <button onClick={handleClose}>Close</button>
        </article>
    );
}

export default About;