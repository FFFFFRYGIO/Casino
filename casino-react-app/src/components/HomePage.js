import React from 'react';
import './HomePage.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const HomePage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const nickName = event.target.nickName.value;
        let ResponseNickName = "";
        axios.post('/DB/user/add', { nickName }).then(response => {
              console.log(response.data);
              ResponseNickName = response.data.nickName;})
              .catch(error => {
                console.error(error);
              });

        navigate('/StartPage', {ResponseNickName});
    };

    return (
        <div className="content">
            <div class="Box">
                <img src="logo.png" alt="logo" class="logo"/>
                <form>
                    <input type="text" name="nickName" placeholder="Input Your Nick" required />
                    <button type="submit" class="poker-chip-button">
                        <img src="arrow.png" alt="arrow" />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
