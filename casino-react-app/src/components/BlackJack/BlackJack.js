import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BlackJack.css';

const BlackJack = () => {


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ResponseNickName = searchParams.get('ResponseNickName');
    const navigate = useNavigate();

    const [UserBalance, setUserBalance] = useState(300.0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
            axios.get(`/DB/user/get/${ResponseNickName}`)
                .then(response => {
                    const { nickName, balance } = response.data;
                    setUserBalance(balance);
                    setLoading(false);

                })
                .catch(error => {
                     console.error(error);
                     setLoading(false);
                });
    }, []);

    const handleGoBack = () => {
             navigate(`/StartPage?ResponseNickName=${ResponseNickName}`);
        };

    return (
        <div className="BlackJackMain">
            <div className="topNav" id="topNavBlackJack">
                <button className="topNav_button GoBackButton" onClick={handleGoBack}><img className="icon back_money_prompt" src="img/general/left-arrow.png" alt="user_icon" /></button>
                <div className="topNav_button AccBalance">{UserBalance}$ &nbsp;
                    <img className="icon back_money_prompt" src="img/general/money_icon.png" alt="money_icon" />
                </div>
            </div>
            <div class="tag-container tag-center">
              <div class="tag">
                <p className="game-caption">Game still In Progress</p>
                <div class="tag-tail-left"></div>
                <div class="tag-tail-right"></div>
              </div>
            </div>
        </div>
    );
};

export default BlackJack;