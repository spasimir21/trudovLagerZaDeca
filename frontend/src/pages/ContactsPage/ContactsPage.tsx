import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { PersonalInformationCard } from '../../components/PersonalInformationCard/PersonalInformationCard';
import { ScrollRestoration } from 'react-router-dom';
// @ts-ignore
import * as classes from './ContactsPage.module.scss';
import React from 'react';
// @ts-ignore
import phone from '../../assets/phoneIcon.svg';
// @ts-ignore
import mail from '../../assets/mailIcon.svg';
// @ts-ignore
import facebook from '../../assets/facebookIcon.svg';
// @ts-ignore
import instagram from '../../assets/instagramIcon.svg';
// @ts-ignore
import tiktok from '../../assets/tiktokIcon.svg';

// @ts-ignore
import niki from '../../assets/team/niki.png';
// @ts-ignore
import stefi from '../../assets/team/stefi.png';
// @ts-ignore
import spas from '../../assets/team/spas.png';
// @ts-ignore
import poli from '../../assets/team/poli.png';
// @ts-ignore
import vladi from '../../assets/team/vladi.png';
// @ts-ignore
import dani from '../../assets/team/dani.png';
// @ts-ignore
import ellie from '../../assets/team/ellie.png';
// @ts-ignore
import dari from '../../assets/team/dari.png';

// @ts-ignore
import tomato from '../../assets/tomato.svg';

const teamMembars = [
  { name: 'Николай Лазаров', role: 'Бизнес Мениджър', image: niki },
  { name: 'Стефани Христова', role: 'Дизайнер', image: stefi },
  { name: 'Спасимир Павлов', role: 'Програмист', image: spas },
  { name: 'Полина Димитрова', role: 'Фотограф', image: poli },
  { name: 'Владимир Пеев', role: 'Game developper', image: vladi },
  { name: 'Даниел Герасимов', role: 'Game developer', image: dani },
  { name: 'Елена Станойска', role: 'Бизнес Мениджър', image: ellie },
  { name: 'Дарина Даскалова', role: 'Фотограф', image: dari }
];

function ContactsPage() {
  return (
    <div className='page'>
      <HeaderSpacing />
      {/* <div className={classes.section}></div> */}
      <div className='titleContainer'>
        <p>Контакти</p>
      </div>

      <div className='moreInformationContainer'>
        <p className={classes.informationTitle}>За въпроси и повече информация - Свържете се с нас!</p>

        <a href='tel:+359895383457' target='about:blank'>
          <ul className={classes.phoneIcon}>
            {' '}
            <img src={phone} alt='phone image' className={classes.iconText} /> 0895383457
          </ul>
        </a>

        <a href='mailto: gardencampdevin@gmail.com' target='about:blank'>
          <ul className={classes.phoneIcon}>
            {' '}
            <img src={mail} alt='phone image' className={classes.iconText} />
            gardencampdevin@gmail.com
          </ul>
        </a>
      </div>

      <div className={classes.gap}></div>

      <div>
        <p className={classes.informationTitle}>Можете да ни намерите тук:</p>
        <a href='https://www.facebook.com/profile.php?id=61550674066771' target='about:blank'>
          <ul className={classes.phoneIcon}>
            {' '}
            <img src={facebook} alt='phone image' className={classes.iconText} /> Градинарски лагер “Розов домат”
          </ul>
        </a>
        <a href='https://instagram.com/rozovdomat_camp?igshid=NzZlODBkYWE4Ng==' target='about:blank'>
          <ul className={classes.phoneIcon}>
            <img src={instagram} alt='phone image' className={classes.iconText} /> rozovdomat_camp
          </ul>
        </a>
        {/* <ul className={classes.phoneIcon}>
          <img src={tiktok} alt='phone image' className={classes.iconText} /> rozovdomat.camp
        </ul> */}
      </div>

      <div className={classes.gap}></div>

      <div className={'titleContainer ' + classes.accentContainer} style={{ marginTop: '60px' }}>
        <img src={tomato} className={classes.tomato} />
        <p>Екип</p>
      </div>

      <div className={classes.teamCardsContainer}>
        {teamMembars.map(member => (
          <PersonalInformationCard name={member.name} role={member.role} key={member.name} image={member.image} />
        ))}
      </div>
    </div>
  );
}

export { ContactsPage };
