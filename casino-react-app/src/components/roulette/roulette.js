import React, { useState, useEffect } from 'react';
import RouletteBoard from './board';
import RouletteWheel from "./wheel";
import './roulette.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Roulette = () => {
    const [UserNick, setUserNick] = useState("");
    const [UserBalance, setUserBalance] = useState(0.0);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ResponseNickName = searchParams.get('ResponseNickName');

    const navigate = useNavigate();

        useEffect(() => {
                axios.get(`/DB/user/get/${ResponseNickName}`)
                    .then(response => {
                        const { nickName, balance } = response.data;
                        setUserNick(nickName);
                        setUserBalance(balance);
                        setLoading(false);
                    })
                    .catch(error => {
                        console.error(error);
                        setLoading(false);
                    });
            }, [ResponseNickName]);

    const handleGoBack = () => {
         navigate(`/StartPage?ResponseNickName=${UserNick}`);
    };

    return (
        <div className="roulette_main_div">
            <div className="topNav">
                <div className="left">
                    <button className="GoBackButton" onClick={handleGoBack}><img className="icon back_money_prompt" src="left-arrow.png" alt="user_icon" /></button>
                </div>
                <div className="right">
                    <div className="AccBalance">
                        <p>{UserBalance}$ &nbsp;</p>
                        <img className="icon back_money_prompt" src="money_icon.png" alt="money_icon" />
                    </div>
                </div>
            </div>
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
