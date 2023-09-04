import { Route, Routes, useNavigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage/LandingPage';
import React, { useEffect } from 'react';
import './global.scss';

function App() {
  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
    </Routes>
  );
}

export { App };
