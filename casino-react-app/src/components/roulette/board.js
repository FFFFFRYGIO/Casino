import React, { useState } from 'react';
import './board.css';

const RouletteBoard = () => {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleNumberChoose = (number) => {
        setSelectedNumber(number);
    };

    const handleCategoryChoose = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className="board_main">
            <div className="board_numbers">
                <button className="board_numbers_buttons" onClick={() => handleNumberChoose(1)}>1</button>
                <button className="board_numbers_buttons" onClick={() => handleNumberChoose(2)}>2</button>
                <button className="board_numbers_buttons" onClick={() => handleNumberChoose(3)}>3</button>
                <button className="board_numbers_buttons" onClick={() => handleNumberChoose(4)}>4</button>
                <button className="board_numbers_buttons" onClick={() => handleNumberChoose(5)}>5</button>
                <button className="board_numbers_buttons" onClick={() => handleNumberChoose(6)}>6</button>
            </div>

            <div className="board_categories">
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose(11)}>Black</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose(22)}>Red</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose(33)}>Green</button>
            </div>

            <div>
                <p>Wybrany numer: {selectedNumber}</p>
                <p>Wybrana kategoria: {selectedCategory}</p>
            </div>

        </div>
    );
};

export default RouletteBoard;
