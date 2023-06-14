import React from "react";
import Base from "./Base";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();
  var ResponseNickName = "";

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const nickName = event.target.nickName.value;
    try {
        const response = await axios.post("/DB/user/add", { nickName });
        const ResponseNickName = response.data.nickName;
        navigate(`/StartPage?ResponseNickName=${ResponseNickName}`);
    } catch (error) {
        console.error(error);
    }
  };

  return (

      <div className="homepage-main">
          <div className="side-image"><img src="img/home/left_wing.png" alt="arrow" /></div>
          <div className="content content2">
              <div className="logodiv">
                <img src="img/home/logo.png" alt="logo" class="logo" />
              </div>
              <form onSubmit={handleFormSubmit}>
                <input
                  type="text"
                  name="nickName"
                  placeholder="Input Your Nick"
                  required
                />
                <button type="submit" class="poker-chip-button">
                  <img src="img/home/arrow.png" alt="arrow" />
                </button>
              </form>
              <div className="filler2"></div>
          </div>
          <div className="side-image"><img src="img/home/right_wing.png" alt="arrow" /></div>
      </div>

  );
};

export default HomePage;
