// @ts-ignore
import * as classes from './SignUpModal.module.scss';
import { useNavigate } from 'react-router-dom';
import React from 'react';

// @ts-ignore
import tomato from '../../assets/tomato.svg';

function SignUpModal() {
  const navigate = useNavigate();

  const returnCallback = () => navigate('/');

  return (
    <div className={classes.modalContainer} onClick={returnCallback}>
      <div className={classes.modal}>
        <img src={tomato} />
        <p>Успешно записване! Провери имейла си!</p>
      </div>
    </div>
  );
}

export { SignUpModal };
