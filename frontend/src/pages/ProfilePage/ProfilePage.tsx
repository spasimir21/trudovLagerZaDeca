import { APIStateContext, getTokenDataReducer, logoutAction } from '../../state/apiState';
import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { useAction, useReducer } from '../../utils/state';
import { LogoutRequest } from '../../api/LogoutRequest';
// @ts-ignore
import * as classes from './ProfilePage.module.scss';
import { useRequest } from '../../api/useRequest';
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';

function formatNumber(number: number, length: number) {
  const str = number.toString();
  return '0'.repeat(length - str.length) + str;
}

function formatDate(date: Date) {
  return formatNumber(date.getDate(), 2) + '.' + formatNumber(date.getMonth() + 1, 2) + '.' + date.getFullYear() + 'г.';
}

function ProfilePage() {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const clearTokens = useAction(APIStateContext, logoutAction);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenData != null) return;
    navigate('/');
  }, []);

  const { loading, send: sendLogout } = useRequest(LogoutRequest, () => {
    clearTokens();
    navigate('/');
  });

  const logoutButtonCallback = () => {
    if (loading || tokenData == null) return;
    sendLogout({ token: tokenData?.raw });
  };

  return (
    <div className={'page ' + classes.profilePage}>
      <HeaderSpacing />
      <div className='titleContainer'>
        <p>Профил</p>
      </div>
      {/* <div style={{ height: '55px' }}></div> */}
      <p className={classes.sectionTitle}>Обща информация</p>
      <div className={classes.profileInfo}>
        <div className={classes.avatarContainer}>
          <div className={classes.avatar}></div>
          <p className={classes.name}>{tokenData?.parsed.fullname}</p>
          <p className={classes.logoutButton} onClick={logoutButtonCallback}>
            Изход
          </p>
        </div>
        <div className={classes.verticalLine}></div>
        <div className={classes.infoContainer}>
          <p>
            <strong>имейл</strong>: {tokenData?.parsed.email}
          </p>
          <p>
            <strong>телефон</strong>: {tokenData?.parsed.phoneNumber}
          </p>
          <div className={classes.genderContainer}>
            <p>
              <strong>пол</strong>:
            </p>
            <div className={classes.gender}></div>
          </div>
          <p>
            <strong>дата на раждане</strong>: {formatDate(new Date(tokenData?.parsed.dateOfBirth ?? 0))}
          </p>
        </div>
      </div>
      <p className={classes.sectionTitle}>Награди</p>
    </div>
  );
}

export { ProfilePage };
