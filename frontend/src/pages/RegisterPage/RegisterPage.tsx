import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
// @ts-ignore
import * as classes from './RegisterPage.module.scss';
import React from 'react';

function RegisterPage() {
  return (
    <div className='page'>
      <HeaderSpacing />
      <div className={classes.registerContainer}>
        <div className={classes.registerForm}>
          <p className={classes.registerTitle}>Регистрация</p>
          <div className={classes.field}>
            <p>Имейл</p>
            <input type='email' placeholder='Имейл' />
          </div>
          <div className={classes.field}>
            <p>Парола</p>
            <input type='text' placeholder='Парола' />
          </div>
          <div className={classes.field}>
            <p>Три Имена</p>
            <input type='text' placeholder='Три Имена' />
          </div>
          <div className={classes.field}>
            <p>Телефон</p>
            <input type='tel' placeholder='Телефон' />
          </div>
          <div className={classes.buttons}>
            <p className={classes.button}>Създай профил</p>
            <p>или</p>
            <p className={classes.button + ' ' + classes.accentButton}>Влез</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { RegisterPage };
