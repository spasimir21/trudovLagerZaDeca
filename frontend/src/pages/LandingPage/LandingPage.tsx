// @ts-ignore
import * as classes from './LandingPage.module.scss';
// @ts-ignore
import deca from './deca.png';
import React from 'react';

function LandingPage() {
  return (
    <div className={'page ' + classes.landingPage}>
      <div className={classes.introVideo}>
        <img src={deca} />
        <div className={classes.overlay}>
          <p className={classes.title}>Елате на лагер и отгледайте собствена реколта в Девин</p>
          <p className={classes.button}>Запиши се</p>
        </div>
      </div>
      <div className={classes.mission}>
        <p>Нашата мисия</p>
        <blockquote>
          Забавлението, комбинирано със здравословната храна и нови знания, е <strong>всичко</strong>, от което децата имат нужда!
        </blockquote>
      </div>
      <div className={classes.testimony}>
        <p>
          Децата се връщат доволни, <strong>НО ЗАЩО</strong>?
        </p>
        <div className={classes.testimonies}>
          <div className={classes.testimonyRect}></div>
          <div className={classes.testimonyRect}></div>
        </div>
      </div>
      <div className={classes.facku}>
        <p>Вие питате - ние отговаряме</p>
        <div className={classes.fackQ}>
          <div className={classes.question}>
            <p>Каква е продължителността на един лагер?</p>
          </div>
          <div className={classes.answer}>
            <p>Всеки лагер се провежда в рамките на една седмица през месеците май, юни, юли и август</p>
          </div>
        </div>
        <div className={classes.fackQ}>
          <div className={classes.question}>
            <p>Какви умения трябва да притежава детето, за да се запише за лагера?</p>
          </div>
          <div className={classes.answer}>
            <p>Не се изискват специални умения, а детето да е жизнерадостно и готово за нови преживявания.</p>
          </div>
        </div>
        <div className={classes.fackQ}>
          <div className={classes.question}>
            <p>Кои са хората, които ще се грижат за децата?</p>
          </div>
          <div className={classes.answer}>
            <p>
              Подбран екип експерти в сферата на работата с деца ще се грижат за тяхното преживяване, а нашите експертни фермери
              ще се грижат за поддържането на реколтата между различните фази на лагера
            </p>
          </div>
        </div>
        <div className={classes.fackQ}>
          <div className={classes.question}>
            <p>Какви активности ще се провеждат на лагера?</p>
          </div>
          <div className={classes.answer}>
            <p>Децата ще се забавляват с редица образователни и развлекателни активности, част от които може да видите тук</p>
          </div>
        </div>
      </div>
      <div className={classes.motto}>
        <p>Нашето мото</p>
        <div className={classes.mottoContainer}>
          <p>Баба знае най-добре!</p>
          <div className={classes.baba}></div>
        </div>
      </div>
      <div className={classes.partners}>
        <p>Партньори</p>
        <div className={classes.partnerList}>
          <div className={classes.partner}></div>
          <div className={classes.partner}></div>
          <div className={classes.partner}></div>
          <div className={classes.partner}></div>
          <div className={classes.partner}></div>
        </div>
        <div className={classes.partnerSignupContainer}>
          <p className={classes.partnerText}>Готов ли си за приключение в градината, много забавления и изненади?</p>
          <p className={classes.button}>Запиши се</p>
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
