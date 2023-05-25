import React from 'react';
import './Base.css';

const HomePage = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
    };

    return (
        <div className="content">
            <div className="corner-image top-left"></div>
            <div className="corner-image top-right"></div>
            <h1>Casino Royale</h1>
            <div className="logo">
                <img src="roulette-image.jpg" alt="Roulette" />
            </div>
            <br />
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" placeholder="Input name" required />
                <br />
                <button type="submit">
                    <img src="arrow-image.jpg" alt="arrow" />
                </button>
            </form>
            <footer>
                <p className="casino-name">Casino Royale</p>
                <p className="authors">Created by: Radosław Relidzyński, Mateusz Gajda, Kuba Kaczmarski</p>
            </footer>
            <div className="corner-image bottom-left"></div>
            <div className="corner-image bottom-right"></div>
        </div>
    );
};

export default HomePage;
