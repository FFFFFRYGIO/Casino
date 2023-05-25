import React from 'react';
import Base from './Base';
import './HomePage.css';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const handleFormSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        console.log(name);
        navigate('/StartPage');
    };

    return (
        <Base>
            <div className="content">
                <h1>Casino Royale</h1>
                <div className="main_image">
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
            </div>
        </Base>
    );
};

export default HomePage;
