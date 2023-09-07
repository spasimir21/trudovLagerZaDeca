// @ts-ignore
import * as classes from './LandingPage.module.scss';
// @ts-ignore
import landingLoop from 'url:../../assets/landingLoop.mp4';
import { Link } from 'react-router-dom';
import React from 'react';

// @ts-ignore
import pear from '../../assets/pear.png';
// @ts-ignore
import asen from '../../assets/asen.png';
// @ts-ignore
import harry from '../../assets/harry.png';

// @ts-ignore
import corn from '../../assets/corn.svg';

function LandingPage() {
  return (
    <div className={'page ' + classes.landingPage}>
      <div className={classes.introVideo}>
        <video src={landingLoop} muted autoPlay loop />
        <div className={classes.overlay}>
          <p className={classes.title}>
            <strong>Забавлението, здравословната храна и нови знания</strong> е всичко, от което <i>децата</i> имат нужда!
          </p>
          <p className={classes.description}>
            Лагер “Розов домат” е летен градинарски лагер, който предлага разнообразна програма за деца между 7 и 12 години.
          </p>
          <Link to='/signup' className={classes.button}>
            Запиши се
          </Link>
        </div>
      </div>
      {/* <div className={classes.mission}>
        <p>Нашата мисия</p>
        <blockquote>
          Забавлението, комбинирано със здравословната храна и нови знания, е <strong>всичко</strong>, от което децата имат нужда!
        </blockquote>
      </div> */}
      <div className={classes.testimony}>
        <p>Децата се връщат доволни - чуйте защо:</p>
        <div className={classes.testimonies}>
          <div className={classes.videoContainer}>
            <iframe
              className={classes.video}
              // width='560'
              // height='315'
              src='https://www.youtube.com/embed/QQjB6uIka-Q?si=zugIwjj0Vp_vyc73'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
            <p>Асен споделя за новите си приятелства.</p>
          </div>
          <div className={classes.videoContainer} style={{ top: '50px' }}>
            <iframe
              className={classes.video}
              // width='560'
              // height='315'
              src='https://www.youtube.com/embed/8XWArjd6Rmc?si=BmL1dnHvR-APkVja'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'></iframe>
            <p>Хари е впечатлен от плодовете, които се отглеждат в градината.</p>
          </div>
        </div>
      </div>
      <div className={classes.miscSection}>
        <img src={corn} />
        <div className={classes.misc}>
          <p>
            Ела на лагер и <strong>отгледай собствена реколта</strong> в Девин
          </p>
          <Link to='/signup' className={classes.button}>
            Запиши се
          </Link>
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
            <p>Каква е цената за едноседмичния лагер?</p>
          </div>
          <div className={classes.answer}>
            <p>Участието на всеки лагер се заплаща 550 лева.</p>
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
        <div className={classes.mottoContainer}>
          <p>Да растем заедно!</p>
          <img src={pear} className={classes.pear} />
          <img src={asen} className={classes.asen} />
          <img src={harry} className={classes.harry} />
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
          <Link to='/signup' className={classes.button}>
            Запиши се
          </Link>
        </div>
      </div>
    </div>
  );
}

export { LandingPage };
