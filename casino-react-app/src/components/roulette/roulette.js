import React from 'react';
import RouletteBoard from './board';
import RouletteWheel from "./wheel";
import './roulette.css';

const Roulette = () => {
    return (
        <div className="roulette_main_div">
            <div>
                <RouletteBoard>
                </RouletteBoard>
            </div>
            <div>
                <RouletteWheel>
                </RouletteWheel>
            </div>
        </div>
    );
};

export default Roulette;
