import React from 'react';
import Base from './Base';
import "./StartPage.css"

const StartPage = () => {
    return (
        <Base>
            <div className="options">
                <button className="option-button"><img className="icon" src="user_icon.png" alt="user_icon" /> RADEK (Change)</button>
                <button className="option-button"><img className="icon" src="user_icon.png" alt="user_icon" /> RADEK (View)</button>
                <button className="option-button"><img className="icon" src="money_icon.png" alt="money_icon" /> 6969.69$ (Add)</button>
            </div>
            <div className="games">
                <div className="game">
                    <button className="game-button">
                        <img className="icon" src="blackjack-icon.jpg" alt="blackjack_icon" />
                    </button>
                    <p className="game-caption">Blackjack</p>
                </div>
                <div className="game">
                    <button className="game-button">
                        <img className="icon" src="roulette-icon.jpg" alt="roulette_icon" />
                    </button>
                    <p className="game-caption">Roulette</p>
                </div>
                <div className="game">
                    <button className="game-button">
                        <img className="icon" src="slot_machine-icon.jpg" alt="slot_machine_icon" />
                    </button>
                    <p className="game-caption">Slot Machine</p>
                </div>
            </div>
        </Base>
    );
};

export default StartPage;
