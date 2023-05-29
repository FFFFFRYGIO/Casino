import React, { useState, useEffect } from 'react';
import "./StartPage.css"
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const StartPage = () => {
    const [UserNick, setUserNick] = useState("");
    const [UserBalance, setUserBalance] = useState(0.0);
    const [loading, setLoading] = useState(true);

    const location = useLocation();

    const navigate = useNavigate();



    const handleChangeUser = () => {
            navigate('/HomePage');
        };

    return (
        <div>
            <div className="options">
                <button className="option-button" onClick={handleChangeUser}><img className="icon" src="signOut.png" alt="user_icon" /> Sign Out </button>
                <button className="option-button"><img className="icon" src="user_icon.png" alt="user_icon" /> {UserNick} Profile </button>
                <button className="option-button"> {UserBalance}$ &nbsp; <img className="icon" src="money_icon.png" alt="money_icon" /></button>
            </div>
            <div className="games">
                <div className="game">
                     <button className="game-button">
                        <div class="outer-border">
                             <div class="mid-border">
                                  <div class="inner-border">
                                     <img className="icon" src="blackjack-icon.jpg" alt="blackjack_icon" />
                                  </div>
                              </div>
                        </div>
                     </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">Blackjack</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
                <div className="game">
                    <button className="game-button">
                            <div class="outer-border">
                                 <div class="mid-border">
                                      <div class="inner-border">
                                         <img className="icon" src="roulette-icon.jpg" alt="roulette_icon" />
                                      </div>
                                  </div>
                            </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">Roulette</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
                <div className="game">
                    <button className="game-button">
                           <div class="outer-border">
                                <div class="mid-border">
                                     <div class="inner-border">
                                        <img className="icon" src="slot_machine-icon.jpg" alt="slot_machine_icon" />
                                     </div>
                                 </div>
                           </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">Slot Machine</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartPage;
