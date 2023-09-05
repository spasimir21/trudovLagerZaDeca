import { Link, useLocation } from 'react-router-dom';
// @ts-ignore
import * as classes from './Header.module.scss';
import React from 'react';

function Header() {
  const location = useLocation();

  return (
    <div className={classes.header}>
      <div className={classes.buttons}>
        <div className={classes.logo}></div>
        {location.pathname != '/' && <Link to='/'>Начало</Link>}
        <Link to='/contacts'>Контакти</Link>
        <Link to='/camp'>Лагер</Link>
      </div>
      <div className={classes.buttons}>
        <Link to='/signup' className={classes.button}>
          Запиши се
        </Link>
        <Link to='/login' className={classes.button + ' ' + classes.accentButton}>
          Вход
        </Link>
      </div>
    </div>
  );
}

export { Header };
