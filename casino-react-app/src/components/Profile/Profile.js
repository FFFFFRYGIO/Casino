import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const Profile = () =>{

    const [UserNick, setUserNick] = useState("");
    const [UserBalance, setUserBalance] = useState(0.0);
    const [loading, setLoading] = useState(true);
    const [newNickName, setNewNickname] = useState('');
    const [history, setHistory] = useState([]);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ResponseNickName = searchParams.get('ResponseNickName');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`/DB/user/get/${ResponseNickName}`)
            .then(response => {
                const { nickName, balance, history} = response.data;
                setUserNick(nickName);
                setUserBalance(balance);
                setHistory(history);
                setLoading(false);

            })
            .catch(error => {
                 console.error(error);
                 setLoading(false);
            });
    }, [ResponseNickName]);

    const deleteUser = () =>{
        axios.delete(`/DB/user/delete/${ResponseNickName}`)
            .catch(error => {
                 console.error(error);
            });
        navigate(`/HomePage`);
    }

    const generateDivs = () => {
        const divCount = 20;
        const divs = [];
        console.log(history);
        if(history.length > 0){
            for (let i = history.length-1; i >= 0; i--) {
                divs.push(<div key={i} class="Payment">
                    <div>Name: {history[i].name}</div>
                    <div>Income: {history[i].income}</div>
                    <div>Date: {history[i].paymentDate}</div>
                </div>);
            }
        }
        return divs;
      };
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put("/DB/user/put", {
                oldNickName: UserNick,
                newNickName: event.target.nickName.value
            }).catch(error => {
                console.error(error);
            });
            navigate(`/StartPage?ResponseNickName=${event.target.nickName.value}`);
        } catch (error) {
            console.error(error);
        }
      };

    return(
        <div className="content profile-main">
            <div className='userDataContainer'>
                <div className="user-data">
                    <div className='userName'>User nickName: {UserNick}</div>
                    <div className='Balance'>User balance: {UserBalance}$</div>
                    <form onSubmit={handleFormSubmit}>
                    <input
                        type="text"
                        name="nickName"
                        placeholder="Input Your New Nick"
                        required
                    />
                    <button className="chip-button" type="submit">SAVE</button>
                    </form>
                </div>
                <div className="registry">REGISTRY</div>
                <div style={{ overflow: 'auto', maxHeight: '300px' }} class="history">
                    {generateDivs()}
                </div>
            </div>
            <button className="delete-user-button" onClick={deleteUser}>delete user</button>
        </div>
    );
}

export default Profile;
