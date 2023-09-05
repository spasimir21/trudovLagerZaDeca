import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
// @ts-ignore
import * as classes from './ProfilePage.module.scss';
import React from 'react';

function ProfilePage() {
  return (
    <div className='page'>
      <HeaderSpacing />
      <div className={classes.titleContainer}>
        <p>Профил</p>
      </div>
      <div className={classes.profileInfo}>
        <div className={classes.avatarContainer}>
          <div className={classes.avatar}></div>
          <p className={classes.name}>Иван Иванов</p>
          <p className={classes.logoutButton}>Изход</p>
        </div>
        <div className={classes.verticalLine}></div>
        <div className={classes.infoContainer}>
          <p>имейл: spasimir.pavlov@gmail.com</p>
          <p>телефон: 0899534524</p>
          <div className={classes.genderContainer}>
            <p>пол:</p>
            <div className={classes.gender}></div>
          </div>
          <p>дата на раждане: 22.07.2016 г.</p>
        </div>
      </div>
      <div className={classes.mapSection}>
        <p>Карта</p>
        <div className={classes.hintContainer}>
          <div className={classes.hintIcon}></div>
          <p>
            За да научите повече информация за отглеждането на различни видове растения на територията на България, изберете
            област, за която да разгледате повече информция.
          </p>
        </div>
        <div className={classes.map}></div>
      </div>
    </div>
  );
}

export { ProfilePage };
