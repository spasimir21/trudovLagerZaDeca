import { APIStateContext, getDefaultAPIState, loadAPIState, setupAPIStateAutosave } from './state/apiState';
import { RegisterPage } from './pages/RegisterPage/RegisterPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ProfilePage } from './pages/ProfilePage/ProfilePage';
import { LandingPage } from './pages/LandingPage/LandingPage';
import { SignUpPage } from './pages/SignUpPage/SignUpPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { CampPage } from './pages/CampPage/CampPage';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { createState } from './utils/state';
import React, { useEffect } from 'react';

const apiState = createState(getDefaultAPIState());

loadAPIState(apiState);

setupAPIStateAutosave(apiState);

const NO_FOOTER_PAGES = new Set(['/login', '/register', '/signup']);

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // because React Router ScrollRestoration is bullshit
  }, [location.pathname]);

  return (
    <APIStateContext.Provider value={apiState}>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/camp' element={<CampPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/contacts' element={<ContactsPage />} />
      </Routes>
      {!NO_FOOTER_PAGES.has(location.pathname) && <Footer />}
    </APIStateContext.Provider>
  );
}

export { App };
