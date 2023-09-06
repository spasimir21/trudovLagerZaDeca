import { APIStateContext, loadAPIState, setupAPIStateAutosave } from './state/apiState';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { createState } from './utils/state';
import React from 'react';

const apiState = createState(loadAPIState());

setupAPIStateAutosave(apiState);

function App() {
  return (
    <APIStateContext.Provider value={apiState}>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
      <Footer />
    </APIStateContext.Provider>
  );
}

export { App };
