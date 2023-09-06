import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { PersonalInformationCard } from '../../components/PersonalInformationCard/PersonalInformationCard';
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

// import 

const teamMembars = [
  { name: "Николай Лазаров", role: "Бизнес Мениджър" },
  { name: "Стефани Христова", role: "Дизайнер" },
  { name: "Спасимир Павлов", role: "Програмист" },
  { name: "Полина Димитрова", role: "Фотограф" },
  { name: "Владимир Пеев", role: "Game developper" },
  { name: "Даниел Герасимов", role: "Game developer" },
  { name: "Елена Станойска", role: "Бизнес Мениджър" },
  { name: "Дарина Даскалова", role: "Фотограф" },
]

function ContactsPage() {
  const teamMembersData = teamMembars.map((member) => <PersonalInformationCard name={member.name} role={member.role} />)
  return (
    <div className='page'>
      <HeaderSpacing />
      {/* <div className={classes.section}></div> */}
      <div className="titleContainer">
        <p>Контакти</p>
      </div>

      <div className='moreInformationContainer'>

        <p className={classes.informationTitle}>
          За въпроси и повече информация - Свържете се с нас!
        </p>

        <ul className={classes.phoneIcon}> <img src={phone} alt="phone image" className={classes.iconText} /> 0895383457</ul>
        <ul className={classes.phoneIcon}> <img src={mail} alt="phone image" className={classes.iconText} />gardencampdevin@gmail.com</ul>
      </div>

      <div className={classes.youCanFindUsHereContainer}>
        <p className={classes.informationTitle}>Можете да ни намерите тук:</p>
        <ul className={classes.phoneIcon}> <img src={facebook} alt="phone image" className={classes.iconText} /> data</ul>
        <ul className={classes.phoneIcon}><img src={instagram} alt="phone image" className={classes.iconText} /> data</ul>
        <ul className={classes.phoneIcon}><img src={tiktok} alt="phone image" className={classes.iconText} /> data</ul>
      </div>

      <div className="titleContainer">
        <p>ЕкипЪ</p>
      </div>


      <div className={classes.teamCardsContainer}>

        {teamMembersData}

      </div>



    </div>
  );
}

export { ContactsPage };
