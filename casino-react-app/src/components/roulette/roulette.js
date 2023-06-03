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
    const [disabled, setDisabled] = useState(true);
    const [downloadUserAgain, setDownloadUserAgain] = useState(false);

    const [winningNumber, setWinningNumber] = useState(null);
    // const [winningMoney, setWinningMoney] = useState(null);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ResponseNickName = searchParams.get('ResponseNickName');

    const navigate = useNavigate();

        useEffect(() => {
            if(UserNick === "" || downloadUserAgain === true){
                axios.get(`/DB/user/get/${ResponseNickName}`)
                    .then(response => {
                        const { nickName, balance } = response.data;
                        setUserNick(nickName);
                        setUserBalance(balance);
                        setLoading(false);
                        setDownloadUserAgain(false);
                    })
                    .catch(error => {
                        console.error(error);
                        setLoading(false);
                        setDownloadUserAgain(false);
                    });
            } 
            }, [downloadUserAgain]);

    const handleGoBack = () => {
         navigate(`/StartPage?ResponseNickName=${UserNick}`);
    };

    const getValueFromBoard = async () => {
        
        console.log(bets);
        console.log(chips);
        
        try{
            await axios.post("/Payment", {
            name: "Roulette",
            income: "" + (-chips[0] - chips[1]),
            nickName: ResponseNickName});
        }catch (error) {
            console.error(error);
        }
        console.log("pay");
        const win = await rouletteSpinning();
        await userBets(bets);
        console.log(win);
        return [win, chips];
    };


    const rouletteSpinning = async () =>{
        try{
            const response = await axios.get("/R/Spinning");
            console.log("spin");
            if (response.data.winningNumber === '00'){
                return 37;
            }else if (response.data.winningNumber === '0'){
                return 0;
            }else{
                return parseInt(response.data.winningNumber, 10);
            }
        }catch (error) {
            console.error(error);
        }
    };

    const userBets = async (b) =>{
        try{
            await axios.post("/R/Bets", {
            ButtonID1: "c-" + b[0],
            ButtonID2: "n-" + b[1]});
            console.log("userBets");
        }catch (error) {
            console.error(error);
        }
    };

    const getChipValue = (value) => {
        setUserBalance(UserBalance - value);   
    };

    const updateBalanceValue = async (c) => {
        const howMuch = await winnerOrLoser(c);
        console.log(howMuch);
        if (howMuch > 0){
            try{
                await axios.post("/Payment", {
                name: "Roulette",
                income: "" + howMuch,
                nickName: ResponseNickName});
            }catch (error) {
                console.error(error);
            }  
        }
        setChips([0, 0]);
        setBets(['','']);
        setDisabled(true);
        //handleReset();
    };

    const winnerOrLoser = async (c) =>{
        try{
            const response = await axios.post("/R/WinningMoney", {
            BetMoney1: c[0],
            BetMoney2: c[1]});
            setDownloadUserAgain(true);
            console.log("checkWinner");
            return response.data.winningMoney;
        }catch (error) {
            console.error(error);
            console.log("test")
        }
    };

    return (
        <div>
            <div className="topNav">
                <button className="topNav_button GoBackButton" onClick={handleGoBack}><img className="icon back_money_prompt" src="img/general/left-arrow.png" alt="user_icon" /></button>
                <div className="topNav_button AccBalance">{UserBalance}$ &nbsp;
                    <img className="icon back_money_prompt" src="img/general/money_icon.png" alt="money_icon" />
                </div>
            </div>
        <div className="roulette_main_div">
            <div>
                <RouletteBoard
                getValueFromBoard={getValueFromBoard}
                getChipValue={getChipValue}
                UserBalance={UserBalance}
                bets={bets}
                setBest={setBets}
                chips={chips}
                setChips={setChips}
                disabled={disabled}
                setDisabled={setDisabled}>
                </RouletteBoard>
            </div>
            <div>
                <RouletteWheel
                winningNumber={winningNumber}
                updateBalanceValue={updateBalanceValue}
                getValueFromBoard={getValueFromBoard}
                UserBalance={UserBalance}>
                </RouletteWheel>
            </div>
        </div>
        </div>
    );
};

export default Roulette;
