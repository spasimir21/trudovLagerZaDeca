import { PersonalInformationCard } from '../../components/PersonalInformationCard/PersonalInformationCard';
import { EventDescription } from '../../components/EventDescription/EventDescription';
import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
// @ts-ignore
import * as classes from './CampPage.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

// @ts-ignore
import camp from '../../assets/Camp.png';
// @ts-ignore
import avatar_ from '../../assets/avatar_.svg';
// @ts-ignore
import scenicView from '../../assets/scenicView.png';

function CampPage() {
  return (
    <div className={'page ' + classes.campPage}>
      {/* <img src={camp} /> */}
      <HeaderSpacing />
      <div className={classes.titleContainer}>
        <p>Лагер “Розов домат”</p>
      </div>
      <p className={classes.mainDescription} style={{ maxWidth: '837px' }}>
        “ГрадинатЪ” представлява едноседмчни лагери за деца на възраст между 7 и 12 години през месеците от май до август в град
        Девин., който предоставя възможността да
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
        <p>Защото най-добрият начин да се научиш на основите на градинарството е чрез практика на терен с професионалисти</p>
      </div>
      <div className={classes.signUpButtonContainer}>
        <Link to='/signup' className={classes.button}>
          Запиши се
        </Link>
      </div>
      <div className={classes.scheduleSection}>
        <p className={classes.sectionTitle + ' ' + classes.altSectionTitle}>Кога ще се провеждат лагерите?</p>
        <div className={classes.scheduleContainer}>
          <div className={classes.leftEvents}>
            <EventDescription
              isLeft={true}
              title='Седмицата на „Сеенето“'
              description='Първата седмица на летния лагер „ГрадинатЪ“, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
              hasSignUp={false}
            />
            <EventDescription
              isLeft={true}
              title='Седмицата на „Сеенето“'
              description='Първата седмица на летния лагер „ГрадинатЪ“, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
              hasSignUp={true}
            />
            <EventDescription
              isLeft={true}
              title='Седмицата на „Сеенето“'
              description='Първата седмица на летния лагер „ГрадинатЪ“, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
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
              description='Първата седмица на летния лагер „ГрадинатЪ“, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
              hasSignUp={true}
            />
            <EventDescription
              isLeft={false}
              title='Седмицата на „Сеенето“'
              description='Първата седмица на летния лагер „ГрадинатЪ“, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
              hasSignUp={true}
            />
            <EventDescription
              isLeft={false}
              title='Седмицата на „Сеенето“'
              description='Първата седмица на летния лагер „ГрадинатЪ“, децата ще имат време да се запознаят с тяхното временно жилище, ще бъдат запознати и с основните знания, необходими за засаждането на земеделска култура по техен избор. и ще се забавляват в природата.'
              dates='20 - 26 май'
              hasSignUp={false}
            />
          </div>
        </div>
      </div>
      <p className={classes.sectionTitle + ' ' + classes.alt2SectionTitle}>Къде ще се провеждат лагерите?</p>
      <p className={classes.mainDescription} style={{ marginBottom: '32px' }}>
        Лагерът ще се проведе в град Девин. Разполагаме с цялата база на къща за гости “”, която включва 15 места за настаняване{' '}
      </p>
      <div className={classes.mapContainer}>
        <iframe
          className={classes.map}
          src='https://www.google.com/maps/embed/v1/place?q=Devin&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8'></iframe>
      </div>
      <p className={classes.sectionTitle + ' ' + classes.alt2SectionTitle}>Интервю със собственика на вилата</p>
      <div className={classes.bottomContainer}>
        <PersonalInformationCard role='Собственик на къщата' name='Владимир' image={avatar_} />
        <img src={scenicView} />
      </div>
    </div>
  );
}

export { CampPage };
