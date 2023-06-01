import React from 'react';
import './Base.css';

const Base = ({ children }) => {
    return (
        <div className="content">
            <img src="img/general/corner-image.png" className="corner-image top-left"></img>
            <img src="img/general/corner-image.png" className="corner-image top-right"></img>
            {children}
            <footer>
                <p className="casino-name">Casino Royale</p>
                <p className="authors">Created by: Radosław Relidzyński, Mateusz Gajda, Kuba Kaczmarski</p>
            </footer>
            <img src="img/general/corner-image.png" className="corner-image bottom-left"></img>
            <img src="img/general/corner-image.png" className="corner-image bottom-right"></img>
        </div>
    );
};

export default Base;
