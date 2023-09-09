import { APIStateContext, getTokenDataReducer } from '../../state/apiState';
import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import * as classes from './Header.module.scss';
import { useReducer } from '../../utils/state';
import React, { useEffect, useState } from 'react';

// @ts-ignore
import logo from '../../assets/logo.png';

function Header() {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const location = useLocation();

  const [headerHasBackground, setHeaderHasBackground] = useState(false);

  useEffect(() => {
    const callback = () => {
      if (location.pathname !== '/') {
        setHeaderHasBackground(true);
        return;
      }

      if (window.scrollY >= window.innerHeight && !headerHasBackground) setHeaderHasBackground(true);
      if (window.scrollY < window.innerHeight && headerHasBackground) setHeaderHasBackground(false);
    };

    callback();
    window.addEventListener('scroll', callback);

    return () => window.removeEventListener('scroll', callback);
  }, [location.pathname, headerHasBackground]);

  return (
    <div className={classes.header + ' ' + (headerHasBackground ? classes.full : '')}>
      <div className={classes.buttons}>
        <img className={classes.logo} src={logo} />
        {location.pathname != '/' && <Link to='/'>Начало</Link>}
        <Link to='/contacts'>Контакти</Link>
        <Link to='/camp'>Лагер</Link>
      </div>
      <div className={classes.buttons}>
        <Link to='/signup' className={classes.button}>
          Запиши се
        </Link>
        <Link to={tokenData == null ? '/login' : '/profile'} className={classes.button + ' ' + classes.accentButton}>
          {tokenData == null ? 'Вход' : 'Профил'}
        </Link>
      </div>
    </div>
  );
}

export { Header };
