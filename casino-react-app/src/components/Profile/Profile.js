import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';


const Profile = () =>{

    const [UserNick, setUserNick] = useState("");
    const [UserBalance, setUserBalance] = useState(0.0);
    const [loading, setLoading] = useState(true);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const ResponseNickName = searchParams.get('ResponseNickName');

    const navigate = useNavigate();

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

    const deleteUser = () =>{
        axios.get(`/DB/user/delete/${ResponseNickName}`)
            .catch(error => {
                 console.error(error);
                 setLoading(false);
            });
        navigate(`/HomePage`);
    }


    return(
        <div className="content profile-main">
            <div className='userDataContainer'>
                <div className="user-data">
                    <div className='userName'>User nickName: {UserNick}</div>
                    <div className='Balance'>User balance: {UserBalance}$</div>
                    <button className="delete-user-button" onClick={deleteUser}>delete user</button>
                </div>
                <div className="registry">REGISTRY</div>
            </div>
            <button className="chip-button">SAVE</button>
        </div>
    );
}

export default Profile;
