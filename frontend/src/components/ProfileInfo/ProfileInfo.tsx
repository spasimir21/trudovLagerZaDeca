import { APIStateContext, getTokenDataReducer, logoutAction } from '../../state/apiState';
import { useAction, useReducer } from '../../utils/state';
import { LogoutRequest } from '../../api/LogoutRequest';
// @ts-ignore
import * as classes from './ProfileInfo.module.scss';
import { useRequest } from '../../api/useRequest';
import { useNavigate } from 'react-router-dom';
import React from 'react';

// @ts-ignore
import femaleIcon from '../../assets/femaleIcon.svg';
// @ts-ignore
import maleIcon from '../../assets/maleIcon.svg';

// @ts-ignore
import avatar from '../../assets/avatar.svg';

function formatNumber(number: number, length: number) {
  const str = number.toString();
  return '0'.repeat(length - str.length) + str;
}

function formatDate(date: Date) {
  return formatNumber(date.getDate(), 2) + '.' + formatNumber(date.getMonth() + 1, 2) + '.' + date.getFullYear() + 'г.';
}

function ProfileInfo({ hasLogout }: { hasLogout: boolean }) {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const clearTokens = useAction(APIStateContext, logoutAction);
  const navigate = useNavigate();

  const { loading, send: sendLogout } = useRequest(LogoutRequest, () => {
    clearTokens();
    navigate('/');
  });

  const logoutButtonCallback = () => {
    if (loading || tokenData == null) return;
    sendLogout({ token: tokenData?.raw });
  };

  return (
    <div className={classes.profileInfo}>
      <div className={classes.avatarContainer}>
        <img className={classes.avatar} src={avatar} />
        <p className={classes.name}>{tokenData?.parsed.fullname}</p>
        {hasLogout && (
          <p className={classes.logoutButton} onClick={logoutButtonCallback}>
            Изход
          </p>
        )}
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
          <div className={classes.gender}>
            <img className={classes.icon} src={tokenData?.parsed.isMale ? maleIcon : femaleIcon} />
          </div>
        </div>
        <p>
          <strong>дата на раждане</strong>: {formatDate(new Date(tokenData?.parsed.dateOfBirth ?? 0))}
        </p>
      </div>
    </div>
  );
}

export { ProfileInfo };
