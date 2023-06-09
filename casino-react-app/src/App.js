import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StartPage from './components/StartPage';
import Roulette from './components/roulette/roulette';
import Base from './components/Base';
import Payment from './components/Payment/payment';
import Profile from './components/Profile/Profile';
import Slot from './components/SlotMachine/slot';
import BlackJack from './components/BlackJack/BlackJack';

const App = () => {
  return (
    <Base>
        <BrowserRouter>
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/StartPage" element={<StartPage />} />
                <Route path="/Roulette" element={<Roulette />} />
                <Route path="/Payment" element={<Payment />} />
                <Route path="/Slot" element={<Slot />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/BlackJack" element={<BlackJack />} />
            </Routes>
        </BrowserRouter>
    </Base>
  );
};

export default App;
