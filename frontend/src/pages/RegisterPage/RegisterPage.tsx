import { APIStateContext, getTokenDataReducer, loginAction } from '../../state/apiState';
import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { useNavigate, ScrollRestoration } from 'react-router-dom';
import { RegisterRequest } from '../../api/RegisterRequest';
import { useAction, useReducer } from '../../utils/state';
// @ts-ignore
import * as classes from './RegisterPage.module.scss';
import React, { useEffect, useState } from 'react';
import { useRequest } from '../../api/useRequest';

// @ts-ignore
import femaleIcon from '../../assets/femaleIcon.svg';
// @ts-ignore
import maleIcon from '../../assets/maleIcon.svg';

function formatNumber(number: number, length: number) {
  const str = number.toString();
  return '0'.repeat(length - str.length) + str;
}

function formatDate(date: Date) {
  return date.getFullYear() + '-' + formatNumber(date.getMonth() + 1, 2) + '-' + formatNumber(date.getDate(), 2);
}

function RegisterPage() {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const setTokens = useAction(APIStateContext, loginAction as any);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState(Date.now() - 220752000000);
  const [isMale, setIsMale] = useState(false);

  useEffect(() => {
    if (tokenData == null) return;
    navigate('/');
  }, []);

  const { loading, send: sendRegister } = useRequest(RegisterRequest, (result, error) => {
    if (!result || error) {
      console.log(error?.error.message);
      return;
    }

    setTokens(result[0], result[1]);
    navigate('/');
  });

  const registerButtonCallback = () => {
    if (loading) return;
    sendRegister({ fullname: name, email, phoneNumber: phone, dateOfBirth: birthdate, isMale, password });
  };

  return (
    <div className='page'>
      <HeaderSpacing />
      <div className={classes.registerContainer}>
        <div className={classes.registerForm}>
          <p className={classes.registerTitle}>Регистрация</p>
          <div className={classes.field}>
            <p>Три имена</p>
            <input type='text' placeholder='Три имена' value={name} onInput={(e: any) => setName(e.target.value)} />
          </div>
          <div className={classes.field}>
            <p>Имейл</p>
            <input type='email' placeholder='Имейл' value={email} onInput={(e: any) => setEmail(e.target.value)} />
          </div>
          <div className={classes.field}>
            <p>Телефон</p>
            <input type='tel' placeholder='Телефон' value={phone} onInput={(e: any) => setPhone(e.target.value)} />
          </div>
          <div className={classes.field}>
            <p>Парола</p>
            <input
              type='password'
              placeholder='Парола'
              value={password}
              onInput={(e: any) => setPassword(e.target.value)}
            />
          </div>
          <div className={classes.fieldRow}>
            <div className={classes.field} style={{ width: '50%' }}>
              <p>Дата на разждане</p>
              <input
                type='date'
                placeholder='Дата на раждане'
                value={formatDate(new Date(birthdate))}
                onInput={(e: any) => setBirthdate(new Date(e.target.value).getTime())}
              />
            </div>
            <div className={classes.field} style={{ width: 'fit-content' }}>
              <p>Пол</p>
              <div className={classes.genderContainer}>
                <img className={classes.icon} src={femaleIcon} />
                <label className={classes.switch}>
                  <input type='checkbox' checked={isMale} onChange={(e: any) => setIsMale(e.target.checked)} />
                  <span className={classes.slider}></span>
                </label>
                <img className={classes.icon} src={maleIcon} />
              </div>
            </div>
          </div>
          <p className={classes.button} onClick={registerButtonCallback}>
            Регистрация
          </p>
        </div>
      </div>
    </div>
  );
}

export { RegisterPage };
