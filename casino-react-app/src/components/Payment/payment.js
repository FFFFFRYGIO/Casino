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

    const makeMoneyClick = async (event) => {
        amount = event.currentTarget.id;
        try {
            const response = await axios.post("/API", {
            nickName: ResponseNickName,
            amount: amount,
            url: window.location.origin + "/API/check/"});
            console.log(window.location.origin + "/API/check/");
            const ResponseURL = response.data.paymentUrl;
            console.log(amount);
            console.log(ResponseURL);
            window.open(ResponseURL, '_self');
        } catch (error) {
            console.error(error);
        }
    };

    const handleGoBack = () => {
         navigate(`/StartPage?ResponseNickName=${UserNick}`);
    };

    return (
        <div className="payment_main">
            <div className="topNav">
                <button className="topNav_button GoBackButton" onClick={handleGoBack}><img className="icon back_money_prompt" src="img/general/left-arrow.png" alt="user_icon" /></button>
                <div className="topNav_button AccBalance">{UserBalance}$ &nbsp;
                    <img className="icon back_money_prompt" src="img/general/money_icon.png" alt="money_icon" />
                </div>
            </div>
            <div className="Info">
                <div className="tag-container tag-center">
                    <div className="tag2">
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
                                     <img className="icon2" src="img/payment/Money-lvl1.jpg" alt="blackjack_icon" />
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
                                     <img className="icon2" src="img/payment/Money-lvl2.jpg" alt="blackjack_icon" />
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
                                     <img className="icon2" src="img/payment/Money-lvl3.jpg" alt="blackjack_icon" />
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
                                     <img className="icon2" src="img/payment/Money-lvl4.jpg" alt="blackjack_icon" />
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
                                     <img className="icon2" src="img/payment/Money-lvl5.jpg" alt="blackjack_icon" />
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
