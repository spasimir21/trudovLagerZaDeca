// @ts-ignore
import * as classes from './Header.module.scss';
import React from 'react';

function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.buttons}>
        <div className={classes.logo}></div>
        <p>Начало</p>
        <p>Контакти</p>
        <p>Лагер</p>
      </div>
      <div className={classes.buttons}>
        <p className={classes.button}>Запиши се</p>
        <p className={classes.button + ' ' + classes.accentButton}>Вход</p>
      </div>
    </div>
  );
}

export { Header };
