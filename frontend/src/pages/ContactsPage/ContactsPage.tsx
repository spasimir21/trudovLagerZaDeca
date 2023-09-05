import { HeaderSpacing} from '../../components/HeaderSpacing/HeaderSpacing';
import { PersonalInformationCard } from '../../components/PersonalInformationCard/PersonalInformationCard';
// @ts-ignore
import * as classes from './ContactsPage.module.scss';
import React from 'react';

function ContactsPage() {
  return (
    <div className='page'>
      <HeaderSpacing />
      {/* <div className={classes.section}></div> */}
      <div className="titleContainer">
        <p>Контакти</p>
      </div>

      <div className='moreInformationContainer'>

        <p>
        За въпроси и повече информация - Свържете се с нас!
        </p>

        <ul>data</ul>
        <ul>data</ul>
      </div>

      <div className={classes.youCanFindUsHereContainer}>
        <p>Можете да ни намерите тук:</p>
        <ul>data</ul>
        <ul>data</ul>
        <ul>data</ul>
      </div>

      <div className="titleContainer">
        <p>ЕкипЪ</p>
      </div>


      <div className={classes.teamCardsContainer}>
          <PersonalInformationCard/>
          <PersonalInformationCard/>
          <PersonalInformationCard/>
          <PersonalInformationCard/>
          
          <PersonalInformationCard/>
          <PersonalInformationCard/>
          <PersonalInformationCard/>
          <PersonalInformationCard/>

      </div>

      

      </div>
  );
}

export { ContactsPage };
