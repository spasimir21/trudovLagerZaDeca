// @ts-ignore
import * as classes from './Header.module.scss';
import React from 'react';

function Header() {
  return (
    <div className={classes.header + ' ' + classes.full}>
      <div className={classes.line}></div>
      <div className={classes.logo}>
        <div className={classes.leftButtons}>
          <p>Начало</p>
          <p>Контакти</p>
          <p>Лагер</p>
        </div>
        <div className={classes.rightButtons}>
          <p className={classes.button}>Запиши се</p>
          <p className={classes.button + ' ' + classes.loginButton}>Log in</p>
        </div>
      </div>
    </div>
  );
}

export { Header };
