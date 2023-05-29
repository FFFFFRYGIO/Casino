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
        if(number <= 18) {
            if(number%2) {
                coloring = "number_button_red";
            } else {
                coloring = "number_button_black";
            }
        } else {
            if(number%2) {
                coloring = "number_button_black";
            } else {
                coloring = "number_button_red";
            }
        }
        return <button className={`board_numbers_buttons ${coloring}`} onClick={() => handleNumberChoose(number)}>
            {number}
        </button>
    }

    const generate_all_number_buttons = () => {
        const buttons = [];
        for (let i = 1; i < 36; i += 3) {
            buttons.push(
                <div key={i}>
                    {generate_number_button(i)}
                    {generate_number_button(i+1)}
                    {generate_number_button(i+2)}
                    <br />
                </div>
            );
        }
        return buttons;
    };

    const generate_all_categories_buttons = () => {
        const buttons = [];
            buttons.push(
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("1st12")}>1st12</button>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("2nd12")}>2nd12</button>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("3rd12")}>3rd12</button>,
                <br/>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("Black")}>Black</button>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("Red")}>Red</button>,
                <br/>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("1to18")}>1to18</button>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("19to36")}>19to36</button>,
                <br/>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("even")}>even</button>,
                <button className="board_categories_buttons" onClick={() => handleCategoryChoose("odd")}>odd</button>,
                <br/>
            )
        return buttons;
    };

    return (
        <div className="board_main">
            <div className="board_numbers">{generate_all_number_buttons()}</div>
            <div className="board_categories">{generate_all_categories_buttons()}</div>

            <img className="roulette_board" src="roulette_board.jpg" alt="roulette_board" />

            <div>
                <p>Chosen number: {selectedNumber}</p>
                <p>Chosen category: {selectedCategory}</p>
            </div>

        </div>
    );
};

export default RouletteBoard;
