import React from 'react';
import './wheel.css';

const RouletteWheel = () => {
    return (
        <div className="wheel_main">
            <div className="spinner">

              <div className="ball"><span></span></div>
              <div className="platebg"></div>
              <div className="platetop"></div>
              <div id="toppart" class="topnodebox">
                <div className="silvernode"></div>
                <div className="topnode silverbg"></div>
                <span className="top silverbg"></span>
                <span className="right silverbg"></span>
                <span className="down silverbg"></span>
                <span className="left silverbg"></span>
              </div>
              <div id="rcircle" className="pieContainer">
                <div className="pieBackground"></div>
              </div>
            </div>

            <div className="control">
              <span className="message">
                    Number Stop: <input id="numwin" type="text" value="24"/> Leave blank for random<br/><br/>
              </span>
              <div>
                <div id="btnSpin" className="button">Spin</div>
                <div id="btnb" className="button">Bigger</div>
                <div id="btns" className="button">Smaller</div>
              </div>
            </div>
        </div>
    );
};

export default RouletteWheel;
