import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import StartPage from './components/StartPage';
import Base from './components/Base';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/StartPage" element={<StartPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
