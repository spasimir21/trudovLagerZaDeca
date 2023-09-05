import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { APIContext, loadAPIState } from './api/apiState';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { APITest } from './pages/APITest/APITest';
import { Route, Routes } from 'react-router-dom';
import React from 'react';

const apiState = loadAPIState();

function App() {
  return (
    <APIContext.Provider value={apiState}>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
        <Route path='/api' element={<APITest />} />
      </Routes>
      <Footer />
    </APIContext.Provider>
  );
}

export { App };
