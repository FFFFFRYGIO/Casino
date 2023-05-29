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

    const generate_number_button = (number) => {
        let coloring = "number_button_green";
        if (number <= 18) {
            if (number % 2) {
                coloring = "number_button_red";
            } else {
                coloring = "number_button_black";
            }
        } else {
            if (number % 2) {
                coloring = "number_button_black";
            } else {
                coloring = "number_button_red";
            }
        }
        return (
            <button className={`number_button ${coloring}`} onClick={() => handleNumberChoose(number)}>
                {number >= 10 ? number : " " + number + " "}
            </button>
        );
    };

    const generate_all_number_buttons = () => {
        const buttons = [];

        for (let i = 1; i <= 36; i++) {
            buttons.push(generate_number_button(i));
        }

        return buttons;
    };

    const generate_all_categories_buttons = () => {
        return (
            <div>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("1st12")}>1st12</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("2nd12")}>2nd12</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("3rd12")}>3rd12</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("Black")}>Black</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("Red")}>Red</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("1to18")}>1to18</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("19to36")}>19to36</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("even")}>even</button>
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("odd")}>odd</button>
            </div>
        );
    };

    return (
        <div className="board_main">
            <div>
                <p>Chosen number: {selectedNumber}</p>
                <p>Chosen category: {selectedCategory}</p>
            </div>
            <div className="board_numbers_buttons">{generate_all_number_buttons()}</div>
            <div className="board_categories">{generate_all_categories_buttons()}</div>
        </div>
    );
};

export default RouletteBoard;
