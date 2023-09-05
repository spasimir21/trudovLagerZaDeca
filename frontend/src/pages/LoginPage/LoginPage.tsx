import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
// @ts-ignore
import * as classes from './LoginPage.module.scss';
import React from 'react';

function LoginPage() {
  return (
    <div className='page'>
      <HeaderSpacing />
      <div className={classes.loginContainer}>
        <div className={classes.loginForm}>
          <p className={classes.loginTitle}>Вход</p>
          <div className={classes.field}>
            <p>Имейл</p>
            <input type='email' placeholder='Имейл' />
          </div>
          <div className={classes.field}>
            <p>Парола</p>
            <input type='text' placeholder='Парола' />
          </div>
          <div className={classes.buttons}>
            <p className={classes.button}>Влез</p>
            <p>или</p>
            <p className={classes.button + ' ' + classes.accentButton}>Създай профил</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
