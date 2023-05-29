import React, { useState, useEffect } from "react";
import Base from "./Base";
import "./StartPage.css";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

const StartPage = () => {
  //    const { ResponseNickName } = useLocation();
  const [UserNick, setUserNick] = useState("");
  const [UserBalance, setUserBalance] = useState(0.0);
  const [loading, setLoading] = useState(true);

  const location = useLocation();
  const { ResponseNickName } = location.state;
  console.log(ResponseNickName);

  useEffect(() => {
    axios
      .get(`/DB/user/get/${ResponseNickName}`)
      .then((response) => {
        const { nickName, balance } = response.data;
        setUserNick(nickName);
        setUserBalance(balance);
        //console.log(UserNick);
        //console.log(UserBalance);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [ResponseNickName]);

  return (
    <Base>
      <div className="options">
        <button className="option-button">
          <img className="icon" src="user_icon.png" alt="user_icon" />
          {UserNick} (Change)
        </button>
        <button className="option-button">
          <img className="icon" src="user_icon.png" alt="user_icon" />
          {UserNick} (View)
        </button>
        <button className="option-button">
          <img className="icon" src="money_icon.png" alt="money_icon" />
          {UserBalance}$ (Add)
        </button>
      </div>
      <div className="games">
        <div className="game">
          <button className="game-button">
            <img
              className="icon"
              src="blackjack-icon.jpg"
              alt="blackjack_icon"
            />
          </button>
          <p className="game-caption">Blackjack</p>
        </div>
        <div className="game">
          <button className="game-button">
            <img className="icon" src="roulette-icon.jpg" alt="roulette_icon" />
          </button>
          <p className="game-caption">Roulette</p>
        </div>
        <div className="game">
          <button className="game-button">
            <img
              className="icon"
              src="slot_machine-icon.jpg"
              alt="slot_machine_icon"
            />
          </button>
          <p className="game-caption">Slot Machine</p>
        </div>
      </div>
    </Base>
  );
};

export default StartPage;
