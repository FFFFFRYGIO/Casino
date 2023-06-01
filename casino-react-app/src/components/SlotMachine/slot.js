import React, { useState, useEffect } from 'react';
import "./slot.css"
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SlotMachine = () => {

useEffect(() => {
      const items = [
        '💎',
        '7️⃣',
        '🍒',
        '🍎',
        '🍋',
        '🔔',
        '💎',
        '7️⃣',
        '🍒',
        '🍎',
        '🍋',
        '🔔',
      ];
      const doors = document.querySelectorAll('.door');

      document.querySelector('#spinner').addEventListener('click', spin);
      document.querySelector('#reseter').addEventListener('click', init);

      function init(firstInit = true, groups = 1, duration = 1) {
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
            const arr = [];
            for (let n = 0; n < (groups > 0 ? groups : 1); n++) {
              arr.push(...items);
            }
            pool.push(...shuffle(arr));

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
        init(false, 1, 2);

        for (const door of doors) {
          const boxes = door.querySelector('.boxes');
          const duration = parseInt(boxes.style.transitionDuration);
          boxes.style.transform = 'translateY(0)';
          await new Promise((resolve) => setTimeout(resolve, duration * 100));
        }
      }

      function shuffle([...arr]) {
        let m = arr.length;
        while (m) {
          const i = Math.floor(Math.random() * m--);
          [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
      }

      init();
    }, []);


    return (
        <div class="SlotMachine">
            <div className="topNav">
                          <div className="left">
                              <button className="GoBackButton" ><img className="icon back_money_prompt" src="img/general/left-arrow.png" alt="user_icon" /></button>
                          </div>
                          <div className="right">
                              <div className="AccBalance">
                                  <p>$ &nbsp;</p>
                                  <img className="icon back_money_prompt" src="img/general/money_icon.png" alt="money_icon" />
                              </div>
                          </div>
                      </div>
            <div class="doors">
              <div class="door">
                <div class="boxes">
                  {/* <div className="box">?</div> */}
                </div>
              </div>

              <div class="door">
                <div class="boxes">
                  {/* <div className="box">?</div> */}
                </div>
              </div>

              <div class="door">
                <div class="boxes">
                  {/* <div className="box">?</div> */}
                </div>
              </div>
            </div>

            <div class="buttons">
              <button id="spinner">Play</button>
              <button id="reseter">Reset</button>
            </div>
            <div className="BetMoney">
                <button className="BetMoneyButton" id="1" ><img className="MoneyChip" src="img/slot/chip1.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="5" ><img className="MoneyChip" src="img/slot/chip5.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="10" ><img className="MoneyChip" src="img/slot/chip10.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="20" ><img className="MoneyChip" src="img/slot/chip20.png" alt="user_icon" /></button>
                <button className="BetMoneyButton" id="25" ><img className="MoneyChip" src="img/slot/chip25.png" alt="user_icon" /></button>
            </div>
        </div>
    );
};

export default SlotMachine;
