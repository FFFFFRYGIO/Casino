import React, { useState, useEffect } from 'react';
import "./slot.css"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSpring, animated } from 'react-spring';

const SlotMachine = () => {

const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const ResponseNickName = searchParams.get('ResponseNickName');
const navigate = useNavigate();

const [UserNick, setUserNick] = useState("");
const [UserBalance, setUserBalance] = useState(300.0);
const [loading, setLoading] = useState(true);

const[actualBalance, setActualBalance] = useState(0);

const [armProps, setArmProps] = useSpring(() => ({ top: '-25px', height: '50%', overflow: 'visible' }));
const [knobProps, setKnobProps] = useSpring(() => ({ top: '-15px', height: '16px' }));
const [armShadowProps, setArmShadowProps] = useSpring(() => ({ top: '13px' }));
const [ring1ShadowProps, setRing1ShadowProps] = useSpring(() => ({ top: '0', opacity: 0 }));

const [isReady, setIsReady] = useState(false);


const doors = document.querySelectorAll('.door');

useEffect(() => {

axios.get(`/DB/user/get/${ResponseNickName}`)
         .then(response => {
              const { nickName, balance } = response.data;
              setUserNick(nickName);
              setUserBalance(balance);
              setActualBalance(balance);
              setLoading(false);

         })
         .catch(error => {
              console.error(error);
              setLoading(false);
         });

}, []);


      const handleSpin = () => {
              spin();
          };

      const handleInit = () => {
                setUserBalance(actualBalance);
                init();
      };

      async function init(firstInit = true, groups = 1, duration = 1) {
        for (const door of doors) {
          if (firstInit) {
            door.dataset.spinned = '0';
          } else if (door.dataset.spinned === '1') {
            return;
          }

          const boxes = door.querySelector('.boxes');
          const boxesClone = boxes.cloneNode(false);
          const pool = ['❓'];

          if (!firstInit) {
            try{
              const response = await axios.get('/S/SymbolsGetter');
              pool.push(...response.data);
            }catch(error){
              console.error(error);
            }
            console.log(pool);
            boxesClone.addEventListener(
              'transitionstart',
              function () {
                door.dataset.spinned = '1';
                this.querySelectorAll('.box').forEach((box) => {
                  box.style.filter = 'blur(1px)';
                });
              },
              { once: true }
            );

            boxesClone.addEventListener(
              'transitionend',
              function () {
                this.querySelectorAll('.box').forEach((box, index) => {
                  box.style.filter = 'blur(0)';
                  if (index > 0) this.removeChild(box);
                });
              },
              { once: true }
            );
          }

          for (let i = pool.length - 1; i >= 0; i--) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.width = door.clientWidth + 'px';
            box.style.height = door.clientHeight + 'px';
            box.textContent = pool[i];
            boxesClone.appendChild(box);
          }
          boxesClone.style.transitionDuration = `${duration > 0 ? duration : 1}s`;
          boxesClone.style.transform = `translateY(-${door.clientHeight * (pool.length - 1)}px)`;
          door.replaceChild(boxesClone, boxes);
        }
      }

      async function spin() {
          const result = [];
          if(isReady){
              setArmProps({ top: '45px', height: '2%' });
              setKnobProps({ top: '-20px', height: '20px' });
              setArmShadowProps({ top: '40px' });
              setRing1ShadowProps({ top: '50%', opacity: 1 });

              setTimeout(() => {
                 setArmProps({ top: '-25px', height: '50%', overflow: 'visible' });
                 setKnobProps({ top: '-15px', height: '16px' });
                 setArmShadowProps({ top: '13px' });
                 setRing1ShadowProps({ top: '0', opacity: 0 });
              }, 380);

              await init(false, 1, 2);

              for (const door of doors) {
                 const boxes = door.querySelector('.boxes');
                 const duration = parseInt(boxes.style.transitionDuration);
                 boxes.style.transform = 'translateY(0)';
                 await new Promise((resolve) => setTimeout(resolve, duration * 100));
              }

              //const result = [];
                for (const door of doors) {
                  const box = door.querySelector('.box');
                  const content = box.textContent;
                  result.push(content);
                }

              setTimeout(async () => {
                  console.log('Wynik kręcenia:', result);
                  try{
                      await updateBalanceValue(UserBalance - actualBalance);
                      const response = await axios.post("/S/WinningSymbolsAndBets", {
                      BetMoney: [actualBalance - UserBalance],
                      Symbols: result});
                      console.log("checkWinningSymbols");
                      setUserBalance(response.data + UserBalance);
                      setActualBalance(response.data + UserBalance);
                      if (response.data > 0){
                        await updateBalanceValue(response.data);
                      }
                  }catch (error) {
                      console.error(error);
                      console.log("test")
                  }
              }, 2000);
          }
          setIsReady(false);
          return result;

      }
    const updateBalanceValue = async (howMuch) =>{
        try{
            const response = await axios.post("/Payment", {
            name: "Slots",
            income: "" + howMuch,
            nickName: ResponseNickName});
            const responseValue = response.data.value;
            console.log(responseValue);
        }catch (error) {
            console.error(error);
        }
    }
    const handleGoBack = () => {
        navigate(`/StartPage?ResponseNickName=${ResponseNickName}`);
    };

    const handleChipClick = (event) => {
        const chipId = parseInt(event.currentTarget.id);
        if (chipId <= UserBalance){
            setUserBalance(actualBalance - chipId);
            init();
            setIsReady(true);
        }
    };
    return (
        <div class="SlotMachine">
            <div className="topNav">
                <button className="topNav_button GoBackButton" onClick={handleGoBack}><img className="icon back_money_prompt" src="img/general/left-arrow.png" alt="user_icon" /></button>
                <div className="topNav_button AccBalance">{UserBalance}$ &nbsp;
                    <img className="icon back_money_prompt" src="img/general/money_icon.png" alt="money_icon" />
                </div>
            </div>
            <div className="machine">
                <div className="slot-machine-layer">
                    <img className="slot-machine" src="img/slot/slotMachine.png" alt="slotMachine" />
                </div>

                <div className="slot-machine-layer">
                    <div className="doors">
                        <div className="door">
                            <div className="boxes">
                                {/* <div className="box">?</div> */}
                            </div>
                        </div>

                        <div className="door">
                            <div className="boxes">
                                {/* <div className="box">?</div> */}
                            </div>
                        </div>

                        <div className="door">
                            <div className="boxes">
                                {/* <div className="box">?</div> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slot-machine-layer">
                    <div className="spinner" id="spinner" onClick={handleSpin}>
                        <div id="slot-body">
                            <div id="slot-trigger">
                                <animated.div className="arm" style={armProps}><div className="knob" style={knobProps}></div></animated.div>
                                <animated.div className="arm-shadow" style={armShadowProps}></animated.div>
                                <animated.div className="ring1"><animated.div className="shadow" style={ring1ShadowProps}></animated.div></animated.div>
                                <animated.div className="ring2"><animated.div className="shadow" ></animated.div></animated.div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="filler"></div>
            <div class="buttons">
              <button id="reseter" onClick={handleInit}>Reset</button>
            </div>
            <div className="BetMoney">
                <button className="BetMoneyButton" id="1" onClick={handleChipClick}><img className="MoneyChip" src="img/slot/chip1.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="5" onClick={handleChipClick}><img className="MoneyChip" src="img/slot/chip5.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="10" onClick={handleChipClick}><img className="MoneyChip" src="img/slot/chip10.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="20" onClick={handleChipClick}><img className="MoneyChip" src="img/slot/chip20.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="25" onClick={handleChipClick}><img className="MoneyChip" src="img/slot/chip25.png" alt="user_icon" /></button>
            </div>
        </div>
    );
};

export default SlotMachine;
