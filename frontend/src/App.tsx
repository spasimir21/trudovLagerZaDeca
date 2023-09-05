import { LandingPage } from './pages/LandingPage/LandingPage';
import { APIContext, loadAPIState } from './api/apiState';
import { Header } from './components/Header/Header';
import { APITest } from './pages/APITest/APITest';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './global.scss';

const apiState = loadAPIState();

function App() {
  return (
    <APIContext.Provider value={apiState}>
      {/* <Header /> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/api' element={<APITest />} />
      </Routes>
    </APIContext.Provider>
  );
}

export { App };
