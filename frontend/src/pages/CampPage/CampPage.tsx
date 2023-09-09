import { PersonalInformationCard } from '../../components/PersonalInformationCard/PersonalInformationCard';
import { EventDescription } from '../../components/EventDescription/EventDescription';
import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { Link, ScrollRestoration } from 'react-router-dom';
// @ts-ignore
import * as classes from './CampPage.module.scss';
import React from 'react';

// @ts-ignore
import camp from '../../assets/Camp.png';
// @ts-ignore
import avatar_ from '../../assets/avatar_.svg';
// @ts-ignore
import scenicView from '../../assets/scenicView.png';
// @ts-ignore
import tezCherveniDomatiKoiGiMamaRazklati from '../../assets/tezCherveniDomatiKoiGiMamaRazklati.png';
// @ts-ignore
import interview from 'url:../../assets/interview.mp3';

// @ts-ignore
import maiEKrastavica from '../../assets/maiEKrastavica.png';
// @ts-ignore
import apple from '../../assets/apple.png';
// @ts-ignore
import carrot from '../../assets/carrot.png';

function CampPage() {
  return (
    <div className='page'>
      {/* <img src={camp} /> */}
      <HeaderSpacing />
      <div className={classes.titleContainer}>
        <img src={tezCherveniDomatiKoiGiMamaRazklati} />
        <p>Лагер “Розов домат”</p>
      </div>
      <p className={classes.mainDescription} style={{ maxWidth: '837px' }}>
        Лагер “Розов Домат” представлява едноседмчни лагери за деца на възраст между 7 и 12 години през месеците от май
        до август в град Девин., който предоставя възможността да
      </p>
      <p className={classes.sectionTitle}>Защо да се запиша на лагер?</p>
      <div className={classes.benefit}>
        <div className={classes.benefitPole}>
          <p>1</p>
        </div>
        <p>Защото ще прекараш една седмица в игри и нови знания в планинското градче Девин.</p>
      </div>
      <div className={classes.rightBenefit}>
        <p>Защото ще можеш да отгледаш собствена реколта, която после да опиташ.</p>
        <div className={classes.rightBenefitPole}>
          <p>2</p>
        </div>
      </div>
      <div className={classes.benefit}>
        <div className={classes.benefitPole}>
          <p>3</p>
        </div>
        <p>
          Защото най-добрият начин да се научиш на основите на градинарството е чрез практика на терен с професионалисти
        </p>
      </div>
      <div className={classes.signUpButtonContainer}>
        <Link to='/signup' className={classes.button}>
          Запиши се
        </Link>
      </div>
      <div className={classes.scheduleSection}>
        <img src={carrot} className={classes.carrot} />
        <img src={apple} className={classes.apple} />
        <img src={maiEKrastavica} className={classes.maiEKrastavica} />
        <p className={classes.sectionTitle + ' ' + classes.altSectionTitle}>Кога ще се провеждат лагерите?</p>
        <div className={classes.scheduleContainer}>
          <div className={classes.leftEvents}>
            <EventDescription
              isLeft={true}
              title='Откриващо събитие'
              description='По време на откриващото събитие на летен градинарски лагер „Розов Домат“ „малките градинарчета“ ще се съберат в центъра на летния лагер, ще се представят взаимно на остатъка от децата, както и на организаторите. След това бъдещите градинари ще бъдат запознати с тяхното временно жилище, ще разполагат с време да се нанесат и да кажат довиждане на своите родители. '
              dates='30 април'
              hasSignUp={false}
            />
            <EventDescription
              isLeft={true}
              title='Седмицата на „Отглеждането“'
              description='Втората седмица от нашата програма ще отдели внимание на предаването на традиционните земеделски умения, които ще гарантират успешен процес на растежа на растението.'
              dates='24 - 30 юни'
              hasSignUp={true}
            />
            <EventDescription
              isLeft={true}
              title='Седмицата на „Реколтата“'
              description='Четвъртата и последната седмица от нашата лятна програма, децата ще бъдат наградени за своите усилия с разнообразни награди, както и ще бъдат предоставени с удовлетворението от тежкия труд, положен от тях.'
              dates='19 - 25 август'
              hasSignUp={true}
            />
          </div>
          <div className={classes.timelineContainer}>
            <div className={classes.scheduleEdgeNode}>
              <p>април</p>
            </div>
            <div className={classes.line}></div>
            <div className={classes.lineBreak}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.lineBreak}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.lineBreak}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.lineBreak}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.lineBreak}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.lineBreak}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.line}></div>
            <div className={classes.scheduleEdgeNode}>
              <p>август</p>
            </div>
          </div>
          <div className={classes.rightEvents}>
            <EventDescription
              isLeft={false}
              title='Седмицата на „Сеенето“'
              description='Първата седмица на летния лагер Лагер “Розов Домат”, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
              hasSignUp={true}
            />
            <EventDescription
              isLeft={false}
              title='Седмицата на „Очакването“'
              description='Третата седмица времето на участниците ще бъде запълнено с различни дейности с цел земеделско обучение, като бизнес партньорите ни заедно децата ще бъдат инструктирани от организаторите как да поддържат и осигуряват здравословна среда на своята реколта.'
              dates='22 - 28 юли'
              hasSignUp={true}
            />
            <EventDescription
              isLeft={false}
              title='Дни на опитване на реколтата'
              description='Закриващото събитие на летен градинарски лагер „Розов Домат“ ще включва голямо разнообразие от странични дейности с цел развлечение, като на предпоследния ден от програмата на лагера децата ще имат възможността да вкуcят своя труд. Докато последния ден ще бъде изцяло отделен за забавления. '
              dates='24 - 25 август'
              hasSignUp={false}
            />
          </div>
        </div>
      </div>
      <p className={classes.sectionTitle + ' ' + classes.alt2SectionTitle}>Къде ще се провеждат лагерите?</p>
      <p className={classes.mainDescription} style={{ marginBottom: '32px' }}>
        Лагерът ще се проведе в град Девин. Разполагаме с цялата база на къща за гости “”, която включва 15 места за
        настаняване{' '}
      </p>
      <div className={classes.mapContainer}>
        <iframe
          className={classes.map}
          src='https://www.google.com/maps/embed/v1/place?q=Devin&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'
        ></iframe>
      </div>
      <p className={classes.sectionTitle + ' ' + classes.alt2SectionTitle}>Интервю със собственика на вилата</p>
      <div className={classes.bottomContainer}>
        <PersonalInformationCard role='Собственик на къщата' name='Димитър' image={avatar_} audioFile={interview} />
        <img src={scenicView} />
      </div>
    </div>
  );
}

export { CampPage };
