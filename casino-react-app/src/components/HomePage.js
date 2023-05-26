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
                <div class="Box">
                    <img src="logo.png" alt="logo" class="logo"/>
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" name="name" placeholder="Input Your Nick" required />
                        <button type="submit" class="poker-chip-button">
                            <img src="arrow.png" alt="arrow" />
                        </button>
                    </form>
                </div>
            </div>
        </Base>
    );
};

export default HomePage;
