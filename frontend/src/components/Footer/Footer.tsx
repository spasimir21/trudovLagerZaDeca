// @ts-ignore
import * as classes from './Footer.module.scss';
import React from 'react';

function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerSection}>
        <div className={classes.footerLogo}></div>
        <p>Баба знае най-добре!</p>
      </div>
      <div className={classes.footerSection}>
        <p>
          Имате въпроси?
          <br />
          Свържете се с нас!
        </p>
        <div className={classes.block}></div>
        <div className={classes.block}></div>
      </div>
      <div className={classes.footerSection}>
        <p>Социални мрежи</p>
        <div className={classes.socials}>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
          <div className={classes.block}></div>
        </div>
      </div>
    </div>
  );
}

export { Footer };
