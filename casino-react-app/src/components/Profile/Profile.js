import React, {useState, useEffect} from 'react';
import './Profile.css';
import axios from 'axios';
import {useLocation, useNavigate} from 'react-router-dom';


const Profile = () => {

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
                const {nickName, balance, history} = response.data;
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

    const deleteUser = () => {
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
        if (history.length > 0) {
            for (let i = history.length - 1; i >= 0; i--) {
                divs.push(<div key={i} class="Payment">
                    <div>Name: {history[i].name}</div>
                    <div>Income: {history[i].income} $</div>
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

    const handleGoBack = () => {
        navigate(`/StartPage?ResponseNickName=${ResponseNickName}`);
    };


    return (
        <div className="content profile-main">
            <div className='userDataContainer'>
                <div className="user-data">
                    <div className="user-icon">
                        <img src="img/profile/user-icon.png" alt="user" className="user-option-icon"/>
                    </div>
                    <div className='userName'>User nickName: {UserNick}</div>
                    <div className='Balance'>User balance: {UserBalance}$</div>
                    <form onSubmit={handleFormSubmit}>
                        <input
                            type="text"
                            name="nickName"
                            placeholder="Input Your New Nick"
                            required
                        />
                        <div className="profile-options">
                            <button className="chip-button" onClick={handleGoBack}>
                                <img src="img/profile/go-back-button.png" alt="go_back" className="option-icon"/>
                            </button>
                            <button className="chip-button" type="submit">
                                <img src="img/profile/save-button.png" alt="save" className="option-icon"/>
                            </button>
                            <button className="chip-button" onClick={deleteUser}>
                                <img src="img/profile/delete-button.png" alt="delete" className="option-icon"/>
                            </button>
                        </div>
                    </form>
                </div>
                <div style={{overflow: 'auto', maxHeight: '300px'}} class="history">
                    REGISTRY
                    {generateDivs()}
                    <div>
                        <div class="center">
                            REGISTRY
                        </div>
                        <div style={{overflow: 'auto', maxHeight: '300px'}} class="history">
                            {generateDivs()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
