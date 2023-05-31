import React, { useState } from 'react';
import './board.css';

const RouletteBoard = ({getValueFromBoard, getChipValue}) => {
    const [selectedNumber, setSelectedNumber] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const [amount, setAmount] = useState(null);
    const [bets, setBest] = useState(['', '']);
    const [chips, setChips] = useState([0, 0]);

    const [disabled, setDisabled] = useState(true);


    const handleNumberChoose = (number) => {
        if (number === 100) setSelectedNumber("00");
        else setSelectedNumber(number);
        bets[0] = number.toString();
        // await returnChipValue(chips[0]);
        getChipValue(amount - chips[0]);
        chips[0] = amount;
        console.log(bets);
        console.log(chips);
        setBest(bets);
        setChips(chips);
        //setDisabled(true);
    };

    const handleCategoryChoose = (category) => {
        setSelectedCategory(category);
        bets[1] = generateNumbers(category).join('.');
        getChipValue(amount - chips[1]);
        chips[1] = amount;
        console.log(bets);
        console.log(chips);
        setBest(bets);
        setChips(chips);
        //setDisabled(true);
    };

    const black_numbers = [
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35
    ];
    const all_numbers = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 32, 33, 34, 35, 36
    ];

    const generateNumbers = (category) => {
        if (category === "1st12"){
            return all_numbers.filter(num => num <= 12);
        }else if (category === "2nd12"){
            return all_numbers.filter(num => num >= 13 && num <= 24);
        }else if(category === "3rd12"){
            return all_numbers.filter(num => num >= 25);
        }else if(category === "2to1:n%3=1"){
            return all_numbers.filter(num => num % 3 === 1);
        }else if(category === "2to1:n%3=2"){
            return all_numbers.filter(num => num % 3 === 2);
        }else if(category === "2to1:n%3=0"){
            return all_numbers.filter(num => num % 3 === 0);
        }else if(category === "1to18"){
            return all_numbers.filter(num => num <= 18);
        }else if(category === "19to36"){
            return all_numbers.filter(num => num >= 19);
        }else if(category === "even"){
            return all_numbers.filter(num => num % 2 === 0);
        }else if(category === "odd"){
            return all_numbers.filter(num => num % 2 === 1);
        }else if(category === "Red"){
            return all_numbers.filter(num => !black_numbers.includes(num));
        }else if(category === "Black"){
            return black_numbers;
        }

    };

    const generate_number_button = (number) => {
        let coloring = "number_button_green";
        if (black_numbers.includes(number)) {
            coloring = "number_button_black";
        } else {
            coloring = "number_button_red";
        }
        return (
            <button
                className={`number_button ${coloring}`}
                disabled={disabled}
                onClick={() => handleNumberChoose(number)}
            >
                {number}
            </button>
        );
    };

    const generate_all_number_buttons = () => {
        const buttons = [];

        for (let i = 1; i <= 36; i++) {
            buttons.push(generate_number_button(i));
        }

        // Add 3 for the n%3 categories:
        buttons.push(<button className={`number_button`} disabled={disabled}
                             onClick={() => handleCategoryChoose("2to1:n%3=1")}>{"2to1"}</button>);
        buttons.push(<button className={`number_button`} disabled={disabled}
                             onClick={() => handleCategoryChoose("2to1:n%3=2")}>{"2to1"}</button>);
        buttons.push(<button className={`number_button`} disabled={disabled}
                             onClick={() => handleCategoryChoose("2to1:n%3=0")}>{"2to1"}</button>);

        return buttons;
    };

    const category_buttons_texts_col1 = ["1st12", "2nd12", "3rd12"];
    const category_buttons_texts_col2 = [
        "1to18",
        "even",
        "Red",
        "Black",
        "odd",
        "19to36"
    ];

    const generate_categories_buttons_col1 = () => {
        const buttons = [];
        for (let i = 0; i < category_buttons_texts_col1.length; i++) {
            const text = category_buttons_texts_col1[i];
            buttons.push(
                <button
                    className="category_button category_button_col1"
                    key={i}
                    disabled={disabled}
                    onClick={() => handleCategoryChoose(text)}
                >
                    <span className="category_button_text">{text}</span>
                </button>
            );
        }
        return buttons;
    };

    const generate_categories_buttons_col2 = () => {
        const buttons = [];
        for (let i = 0; i < category_buttons_texts_col2.length; i++) {
            const text = category_buttons_texts_col2[i];
            if (text === "Red") {
                buttons.push(
                    <button
                        className="category_button category_button_col2 category_button_col2_red"
                        key={i}
                        disabled={disabled}
                        onClick={() => handleCategoryChoose(text)}
                    >
                        <span className="category_button_text">{text}</span>
                    </button>
                );
            } else if (text === "Black") {
                buttons.push(
                    <button
                        className="category_button category_button_col2 category_button_col2_black"
                        key={i}
                        disabled={disabled}
                        onClick={() => handleCategoryChoose(text)}
                    >
                        <span className="category_button_text ">{text}</span>
                    </button>
                );
            } else {
                buttons.push(
                    <button
                        className="category_button category_button_col2"
                        key={i}
                        disabled={disabled}
                        onClick={() => handleCategoryChoose(text)}
                    >
                        <span className="category_button_text">{text}</span>
                    </button>
                );
            }
        }
        return buttons;
    };

    const parseBet = () => {
        const data = {
            selectedNumber: selectedNumber,
            selectedCategory: selectedCategory
        };
        getValueFromBoard(bets, chips);
        handleReset();

        // fetch('/Roulette', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // })
        //     .then((response) => response.json())
        //     .then((data) => {
        //         // Handle the response from the server
        //         console.log(data);
        //     })
        //     .catch((error) => {
        //         // Handle any error that occurred
        //         console.error(error);
        //     });
    };


    const handleChip = (event) => {
        setAmount(parseFloat(event.currentTarget.id));
        setDisabled(false);
    }

    const handleReset = () => {
        setChips([0, 0]);
        setBest(['','']);
        setDisabled(true);
    }

    return (
        <div className="board_main">
            <div className="BetMoney">
                <button className="BetMoneyButton" id="50" onClick={handleChip}><img className="MoneyChip" src="chip50.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="100" onClick={handleChip}><img className="MoneyChip" src="chip100.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="500" onClick={handleChip}><img className="MoneyChip" src="chip500.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="1000" onClick={handleChip}><img className="MoneyChip" src="chip1000.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="5000" onClick={handleChip}><img className="MoneyChip" src="chip5000.png" alt="user_icon" /></button>
            </div>
            <div className="board">
                <div>
                    <div className="board">
                        <button
                            className={`number_button number_button_green`}
                            disabled={disabled}
                            onClick={() => handleNumberChoose(0)}
                        >
                            0
                        </button>
                        <button
                            className={`number_button number_button_green`}
                            disabled={disabled}
                            onClick={() => handleNumberChoose(100)}
                        >
                            00
                        </button>
                    </div>
                    <div className="board_numbers_buttons">
                        {generate_all_number_buttons()}
                    </div>
                </div>
                <div className="board_categories_buttons">
                    {generate_categories_buttons_col1()}
                </div>
                <div className="board_categories_buttons">
                    {generate_categories_buttons_col2()}
                </div>
            </div>
            <div className="chosen_info">
                <br />
                Chosen number: {selectedNumber}
                <br />
                Chosen category: {selectedCategory}
                <br />
                <button className="parseBet" onClick={parseBet}>Submit bet</button>
            </div>
            <button className="ResetButton" onClick={handleReset}>Reset Your Bets</button>
        </div>
    );
};

export default RouletteBoard;
