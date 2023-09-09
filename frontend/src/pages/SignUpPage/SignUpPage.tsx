import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { APIStateContext, getTokenDataReducer, loginAction } from '../../state/apiState';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
// @ts-ignore
import * as classes from './SignUpPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useAction, useReducer } from '../../utils/state';
import React, { useState } from 'react';

// @ts-ignore
import femaleIcon from '../../assets/femaleIcon.svg';
// @ts-ignore
import maleIcon from '../../assets/maleIcon.svg';

// @ts-ignore
import corn from '../../assets/corn.png';
// @ts-ignore
import tomatoes from '../../assets/tomatoes.png';
import { useRequest } from '../../api/useRequest';
import { RegisterRequest } from '../../api/RegisterRequest';
import { SignUpModal } from '../../components/SignUpModal/SignUpModal';

function formatNumber(number: number, length: number) {
  const str = number.toString();
  return '0'.repeat(length - str.length) + str;
}

function formatDate(date: Date) {
  return date.getFullYear() + '-' + formatNumber(date.getMonth() + 1, 2) + '-' + formatNumber(date.getDate(), 2);
}

function SignUpPage() {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const setTokens = useAction(APIStateContext, loginAction as any);
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [camp, setCamp] = useState('0');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState(Date.now() - 220752000000);
  const [isMale, setIsMale] = useState(false);

  const { loading, send: sendRegister } = useRequest(RegisterRequest, (result, error) => {
    if (!result || error) {
      console.log(error?.data?.message);
      return;
    }

    setTokens(result[0], result[1]);
    setShowModal(true);
  });

  const signupButtonCallback = () => {
    if (loading) return;

    if (tokenData != null) {
      setShowModal(true);
      return;
    }

    sendRegister({ fullname: name, email, phoneNumber: phone, dateOfBirth: birthdate, isMale, password });
  };

  return (
    <div className='page'>
      {showModal && <SignUpModal />}
      <HeaderSpacing />
      <div
        className={classes.signupContainer}
        style={{ backgroundImage: `url('${tokenData == null ? corn : tomatoes}')` }}
      >
        <div className={classes.signupForm}>
          <p className={classes.signupTitle}>Записване за лагер</p>
          <div className={classes.field}>
            <p>Избери лагер</p>
            <select value={camp} onChange={(e: any) => setCamp(e.target.value)}>
              <option value='0'>"Сеенето" (20 - 26 май)</option>
              <option value='1'>"Отглеждането" (24 - 30 юни)</option>
              <option value='2'>"Очакването" (22 - 28 юли)</option>
              <option value='3'>"Реколтата" (19 - 25 август)</option>
            </select>
          </div>
          {tokenData != null ? (
            <ProfileInfo hasLogout={false} />
          ) : (
            <>
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
            </>
          )}
          <p className={classes.button} onClick={signupButtonCallback}>
            Запиши ме
          </p>
        </div>
      </div>
    </div>
  );
}

export { SignUpPage };
