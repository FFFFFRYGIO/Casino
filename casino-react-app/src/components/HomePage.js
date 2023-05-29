import React from "react";
import Base from "./Base";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const HomePage = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const nickName = event.target.nickName.value;
    console.log(nickName);
    const ResponseNickName = "";
    try {
        const response = await axios.post("/DB/user/add", { nickName });
        console.log(response.data);
        const ResponseNickName = response.data.nickName;
        navigate("/StartPage", { state: { ResponseNickName: ResponseNickName } });
      } catch (error) {
        console.error(error);
      }
    //navigate("/StartPage", { state: { nickName: ResponseNickName } });
    //history.push('/StartPage', {nickName: nickName});
    //navigate('/StartPage', { state: { nickName: nickName } });
  };

  return (
    <Base>
      <div className="content">
        <div class="Box">
          <img src="logo.png" alt="logo" class="logo" />
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
      </div>
    </Base>
  );
};

export default HomePage;
