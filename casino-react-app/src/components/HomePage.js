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

      <div className="content">
          <div className="logodiv">
            <img src="logo.png" alt="logo" class="logo" />
          </div>
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="nickName"
              placeholder="Input Your Nick"
              required
            />
            <button type="submit" class="poker-chip-button">
              <img src="arrow.png" alt="arrow" />
            </button>
          </form>
      </div>

  );
};

export default HomePage;
