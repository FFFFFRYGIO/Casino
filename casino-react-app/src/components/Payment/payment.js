import React, { useState, useEffect } from 'react';
import "./payment.css"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Payment = () => {

    const [UserNick, setUserNick] = useState("");
    const [UserBalance, setUserBalance] = useState(0.0);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ResponseNickName = searchParams.get('ResponseNickName');

    const navigate = useNavigate();

    var amount = "";

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

    const makeMoneyClick = (event) => {
        amount = event.currentTarget.id;
//        try {
//            const response = await axios.post("/API", {
//            nickName: ResponseNickName,
//            amount: amount});
//            const ResponseNickName = response.data.nickName;
//        } catch (error) {
//            console.error(error);
//        }
        console.log(amount);
    };

    const handleGoBack = () => {
         navigate(`/StartPage?ResponseNickName=${ResponseNickName}`);
    };

    return (
        <div className="payment_main">
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
            <div className="Info">
                <div className="tag-container tag-center">
                    <div className="tag tag2">
                        Choose how much money you would like to deposit
                        <div className="tag-tail-left"></div>
                        <div className="tag-tail-right"></div>
                    </div>
                </div>
            </div>
            <div className="MoneyOptionsContainer">
                <div className="MoneyOption">
                    <button class="money-option-button" id="100" onClick={makeMoneyClick}>
                        <div class="outer-border">
                             <div class="mid-border">
                                  <div class="inner-border">
                                     <img className="icon" src="Money-lvl1.jpg" alt="blackjack_icon" />
                                  </div>
                              </div>
                        </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">100 $</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
                <div className="MoneyOption">
                    <button class="money-option-button" id="500" onClick={makeMoneyClick}>
                        <div class="outer-border">
                             <div class="mid-border">
                                  <div class="inner-border">
                                     <img className="icon" src="Money-lvl2.jpg" alt="blackjack_icon" />
                                  </div>
                              </div>
                        </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">500 $</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
                <div className="MoneyOption">
                    <button class="money-option-button" id="1000" onClick={makeMoneyClick}>
                        <div class="outer-border">
                             <div class="mid-border">
                                  <div class="inner-border">
                                     <img className="icon" src="Money-lvl3.jpg" alt="blackjack_icon" />
                                  </div>
                              </div>
                        </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">1,000 $</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
                <div className="MoneyOption">
                    <button class="money-option-button" id="5000" onClick={makeMoneyClick}>
                        <div class="outer-border">
                             <div class="mid-border">
                                  <div class="inner-border">
                                     <img className="icon" src="Money-lvl4.jpg" alt="blackjack_icon" />
                                  </div>
                              </div>
                        </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">5,000 $</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
                <div className="MoneyOption">
                    <button class="money-option-button" id="10000" onClick={makeMoneyClick}>
                        <div class="outer-border">
                             <div class="mid-border">
                                  <div class="inner-border">
                                     <img className="icon" src="Money-lvl5.jpg" alt="blackjack_icon" />
                                  </div>
                              </div>
                        </div>
                    </button>
                    <div class="tag-container tag-center">
                      <div class="tag">
                        <p className="game-caption">10,000 $</p>
                        <div class="tag-tail-left"></div>
                        <div class="tag-tail-right"></div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
