import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hammer from 'hammerjs';
import './wheel.scss';

const RouletteWheel = ({updateBalanceValue, getValueFromBoard, setReaload}) => {

    useEffect(() => {
        var $inner = document.querySelector('.inner');
        var $spin = document.getElementById('spin');
        var $reset = document.getElementById('reset');
        var $data = document.querySelector('.data');
        var $mask = document.querySelector('.mask');
        var maskDefault = 'Place Your Bets';
        var timer = 9000;
        //console.log(UserBalance);

        var red = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];

        $reset.style.display = 'none';

        $mask.textContent = maskDefault;

        $spin.addEventListener('click', async function () {
          const result = await getValueFromBoard();
          $mask.textContent = 'No More Bets';
          //var randomNumber = Math.floor(Math.random() * 37);
          var randomNumber = result[0];
          console.log(randomNumber);
          var color = null;
          if (randomNumber === 37) {
            $inner.setAttribute('data-spinto', '00');
            document.querySelector('li:nth-child(38) input').checked = true;
          } else if (randomNumber === 0){
            $inner.setAttribute('data-spinto', '0');
            document.querySelector('li:nth-child(37) input').checked = true;
          }
          else {
            $inner.setAttribute('data-spinto', randomNumber);
            document.querySelector('li:nth-child(' + randomNumber + ') input').checked = true;
          }
          this.style.display = 'none';
          $reset.classList.add('disabled');
          $reset.setAttribute('disabled', 'disabled');
          $reset.style.display = 'block';

          var placeholder = document.querySelector('.placeholder');
          if (placeholder) {
            placeholder.remove();
          }

          setTimeout(function () {
            $mask.textContent = maskDefault;
          }, timer + 500);

          setTimeout(function () {
            $reset.classList.remove('disabled');
            $reset.removeAttribute('disabled');

            if (red.includes(randomNumber)) {
              color = 'red';
            } else {
              color = 'black';
            }
            if (randomNumber === 0 || randomNumber === 37) {
              color = 'green';
            }

            if (randomNumber === 37) {
              document.querySelector('.result-number').textContent = '00';
            } else {
              console.log(randomNumber);
              document.querySelector('.result-number').textContent = randomNumber;
            }
            document.querySelector('.result-color').textContent = color;
            document.querySelector('.result').style.backgroundColor = color;
            $data.classList.add('reveal');
            $inner.classList.add('rest');
            updateBalanceValue(result[1]);
          }, timer);
        });

        $reset.addEventListener('click', function () {
          $inner.setAttribute('data-spinto', '');
          $inner.classList.remove('rest');
          this.style.display = 'none';
          $spin.style.display = 'block';
          $data.classList.remove('reveal');
          setReaload(true);
          console.log("test")
        });

        var myElement = document.getElementById('plate');
        var mc = new Hammer(myElement);
        mc.on('swipe', function (ev) {
          if (!$reset.classList.contains('disabled')) {
            if ($spin.style.display === 'block') {
              $spin.click();
            } else {
              $reset.click();
            }
          }
        });
    }, []);
    return (
        <div class="wheel-main">
          <button type="button" class="btn" id="spin"><span class="btn-label">Spin</span></button>
          <button type="button" class="btn btn-reset" id="reset"><span class="btn-label">New Game</span></button>
          <div class="plate" id="plate">
            <ul class="inner">
              <li class="number"><label><input type="radio" name="pit" value="28" /><span class="pit">28</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="9" /><span class="pit">9</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="26" /><span class="pit">26</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="30" /><span class="pit">30</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="11" /><span class="pit">11</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="7" /><span class="pit">7</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="20" /><span class="pit">20</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="32" /><span class="pit">32</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="17" /><span class="pit">17</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="5" /><span class="pit">5</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="22" /><span class="pit">22</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="34" /><span class="pit">34</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="15" /><span class="pit">15</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="3" /><span class="pit">3</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="24" /><span class="pit">24</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="36" /><span class="pit">36</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="13" /><span class="pit">13</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="1" /><span class="pit">1</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="00" /><span class="pit">00</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="27" /><span class="pit">27</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="10" /><span class="pit">10</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="25" /><span class="pit">25</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="29" /><span class="pit">29</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="12" /><span class="pit">12</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="8" /><span class="pit">8</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="19" /><span class="pit">19</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="31" /><span class="pit">31</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="18" /><span class="pit">18</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="6" /><span class="pit">6</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="21" /><span class="pit">21</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="33" /><span class="pit">33</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="16" /><span class="pit">16</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="4" /><span class="pit">4</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="23" /><span class="pit">23</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="35" /><span class="pit">35</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="14" /><span class="pit">14</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="2" /><span class="pit">2</span></label></li>
              <li class="number"><label><input type="radio" name="pit" value="0" /><span class="pit">0</span></label></li>
            </ul>
            <div class="data">
              <div class="data-inner">
                <div class="mask"></div>
                <div class="result">
                  <div class="result-number">00</div>
                  <div class="result-color">red</div>
                </div>
              </div>
            </div>
          </div>
          <div className={"filler"}></div>
        </div>
    );
};

export default RouletteWheel;
