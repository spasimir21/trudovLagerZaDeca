// @ts-ignore
import * as classes from './Footer.module.scss';
import React from 'react';

// @ts-ignore
import logoBig from '../../assets/logoBig.png';
// @ts-ignore
import phoneIcon from '../../assets/phoneIconLight.svg';
// @ts-ignore
import emailIcon from '../../assets/emailIconLight.svg';
// @ts-ignore
import facebookIcon from '../../assets/facebookLight.svg';
// @ts-ignore
import instaIcon from '../../assets/instaLight.svg';
// @ts-ignore
import tiktokIcon from '../../assets/tiktokLight.svg';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerSection}>
        <img className={classes.footerLogo} src={logoBig} />
        {/* <p className={classes.noUnderline}>Да растем заедно!</p> */}
      </div>
      <div className={classes.footerSection}>
        <p>
          Имате въпроси?
          <br />
          Свържете се с нас!
        </p>
        <a href='tel:+359895383457' target='about:blank'>
          <div className={classes.row}>
            <img className={classes.icon} src={phoneIcon} />
            <p>0895383457</p>
          </div>
        </a>
        <a href='mailto: gardencampdevin@gmail.com' target='about:blank'>
          <div className={classes.row}>
            <img className={classes.icon} src={emailIcon} />
            <p>gardencampdevin@gmail.com</p>
          </div>
        </a>
      </div>
      <div className={classes.footerSection}>
        <p>Социални мрежи</p>
        <div className={classes.socials}>
          <a href='https://www.facebook.com/profile.php?id=61550674066771' target='about:blank'>
            <img className={classes.icon} src={facebookIcon} />
          </a>
          <a href='https://instagram.com/rozovdomat_camp?igshid=NzZlODBkYWE4Ng==' target='about:blank'>
            <img className={classes.icon} src={instaIcon} />
          </a>
          <img className={classes.icon} src={tiktokIcon} />
        </div>
      </div>
    </div>
  );
}

export { Footer };
