import { APIStateContext, getTokenDataReducer, loginAction } from '../../state/apiState';
import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { useReducer, useAction } from '../../utils/state';
import { LoginRequest } from '../../api/LoginRequest';
import { Link, useNavigate } from 'react-router-dom';
// @ts-ignore
import * as classes from './LoginPage.module.scss';
import React, { useEffect, useState } from 'react';
import { useRequest } from '../../api/useRequest';

function LoginPage() {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const setTokens = useAction(APIStateContext, loginAction);
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (tokenData == null) return;
    navigate('/');
  }, []);

  const { loading, send: sendLogin } = useRequest(LoginRequest, (result, error) => {
    if (!result || error) {
      console.log(error?.data?.message);
      return;
    }

    setTokens(result[0], result[1]);
    navigate('/');
  });

  const loginButtonCallback = () => {
    if (loading) return;
    sendLogin({ email, password });
  };

  return (
    <div className='page'>
      <HeaderSpacing />
      <div className={classes.loginContainer}>
        <div className={classes.loginForm}>
          <p className={classes.loginTitle}>Вход</p>
          <div className={classes.field}>
            <p>Имейл</p>
            <input type='email' placeholder='Имейл' value={email} onInput={(e: any) => setEmail(e.target.value)} />
          </div>
          <div className={classes.field}>
            <p>Парола</p>
            <input type='password' placeholder='Парола' value={password} onInput={(e: any) => setPassword(e.target.value)} />
          </div>
          <div className={classes.buttons}>
            <p className={classes.button} onClick={loginButtonCallback}>
              Влез
            </p>
            <p>или</p>
            <Link to='/register' className={classes.button + ' ' + classes.accentButton}>
              Създай профил
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { LoginPage };
