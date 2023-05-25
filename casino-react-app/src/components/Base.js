import React from 'react';
import './Base.css';

const Base = ({ children }) => {
    return (
        <div className="content">
            <div className="corner-image top-left"></div>
            <div className="corner-image top-right"></div>
            {children}
            <footer>
                <p className="casino-name">Casino Royale</p>
                <p className="authors">Created by: Radosław Relidzyński, Mateusz Gajda, Kuba Kaczmarski</p>
            </footer>
            <div className="corner-image bottom-left"></div>
            <div className="corner-image bottom-right"></div>
        </div>
    );
};

export default Base;
