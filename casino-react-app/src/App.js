import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StartPage from './components/StartPage';
import Payment from './components/Payment/payment'
import Roulette from './components/roulette/roulette';
import Base from './components/Base';

const App = () => {
  return (
    <Base>
        <BrowserRouter>
            <Routes>
                <Route path="/HomePage" element={<HomePage />} />
                <Route path="/StartPage" element={<StartPage />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/roulette" element={<Roulette />} />
            </Routes>
        </BrowserRouter>
    </Base>
  );
};

export default App;
