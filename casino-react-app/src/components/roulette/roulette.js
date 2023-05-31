import React, { useState, useEffect } from 'react';
import RouletteBoard from './board';
import RouletteWheel from "./wheel";
import './roulette.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Roulette = () => {
    const [UserNick, setUserNick] = useState("");
    const [UserBalance, setUserBalance] = useState(300.0);
    const [loading, setLoading] = useState(true);

    const [bets, setBets] = useState(['', '']);
    const [chips, setChips] = useState([0, 0]);

    const [winningNumber, setWinningNumber] = useState(0);
    // const [winningMoney, setWinningMoney] = useState(null);

    const [gameCost, setGameCost] = useState(0.0);

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

    const getValueFromBoard = async (b, c) => {
        setBets(b);
        setChips(c);
        console.log(b);
        console.log(c);
        
        try{
            await axios.post("/Payment", {
            name: "Roulette",
            income: "" + gameCost,
            nickName: UserNick});
        }catch (error) {
            console.error(error);
        }
        setGameCost(0.0);
        const win = await rouletteSpinning();
        await userBets(b);
        const howMuch = await winnerOrLoser(c);
        console.log(win);
        console.log(howMuch);

        try{
            await axios.post("/Payment", {
            name: "Roulette",
            income: "" + howMuch,
            nickName: UserNick});
        }catch (error) {
            console.error(error);
        }  
    };

    const rouletteSpinning = async () =>{
        try{
            const response = await axios.get("/R/Spinning");
            setWinningNumber(response.data.winningNumber);
            if (response.data.winningNumber === '00'){
                setWinningNumber(37);
            }else{
                setWinningNumber(parseInt(response.data.winningNumber, 10));
            }
            return response.data.winningNumber;
        }catch (error) {
            console.error(error);
        }
    };

    const userBets = async (b) =>{
        try{
            await axios.post("/R/Bets", {
            ButtonID1: "c-" + b[0],
            ButtonID2: "n-" + b[1]});
        }catch (error) {
            console.error(error);
        }
    };

    const winnerOrLoser = async (c) =>{
        try{
            const response = await axios.post("/R/WinningMoney", {
            BetMoney1: c[0],
            BetMoney2: c[1]});
            setUserBalance(response.data.winningMoney + UserBalance);
            return response.data.winningMoney;
        }catch (error) {
            console.error(error);
        }
    };

    const getChipValue = (value) => {
        setUserBalance(UserBalance - value);
        setGameCost(-value);
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
                <RouletteBoard
                getValueFromBoard={getValueFromBoard}
                getChipValue={getChipValue}>
                </RouletteBoard>
            </div>
            <div>
                <RouletteWheel
                winningNumber={winningNumber}>
                </RouletteWheel>
            </div>
        </div>
    );
};

export default Roulette;
