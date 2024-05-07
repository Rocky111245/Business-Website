import React from 'react';
import './SubFooter.css';

const SubFooter = () => {
    return (
        <div className="subfooter__container">
            <img
                className="subfooter__image"
                src="https://ik.imagekit.io/emtbd/emt_images/images/hans-reniers-lQGJCMY5qcM-unsplash.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1673968939541"
                alt="Company Image"
            />
            <div className="subfooter__sub-container">
                <h3 className="subfooter__title">Download Our Company Profile</h3>
                <a href="https://ik.imagekit.io/emtbd/emt_images/EMT%20Profile.pdf?updatedAt=1714984693242" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="subfooter__button-link">
                    <button className="subfooter__button">Download EMT Profile</button>
                </a>
            </div>
        </div>
    );
}

export default SubFooter;
