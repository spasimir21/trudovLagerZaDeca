import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
import { APIStateContext, getTokenDataReducer } from '../../state/apiState';
import { ProfileInfo } from '../../components/ProfileInfo/ProfileInfo';
import { useNavigate, ScrollRestoration } from 'react-router-dom';
// @ts-ignore
import * as classes from './ProfilePage.module.scss';
import { useReducer } from '../../utils/state';
import React, { useEffect } from 'react';

// @ts-ignore
import badge0 from '../../assets/badge_finale/badge_im_a_young_farmer.png';
// @ts-ignore
import badge1 from '../../assets/badge_finale/badge_im_number_one.png';
// @ts-ignore
import badge2 from '../../assets/badge_finale/badge_keeping_the_sun_away.png';
// @ts-ignore
import badge3 from '../../assets/badge_finale/badge_mastered_the_hoe.png';
// @ts-ignore
import badge4 from '../../assets/badge_finale/badge_organization_first.png';
// @ts-ignore
import badge5 from '../../assets/badge_finale/badge_planted_and_grew_cucumbers.png';
// @ts-ignore
import badge6 from '../../assets/badge_finale/badge_planted_and_grew_lettace.png';
// @ts-ignore
import badge7 from '../../assets/badge_finale/badge_planted_and_grew_potatoes.png';
// @ts-ignore
import badge8 from '../../assets/badge_finale/badge_planted_and_grew_tomatoes.png';
// @ts-ignore
import badge9 from '../../assets/badge_finale/badge_safety_first.png';
// @ts-ignore
import badge10 from '../../assets/badge_finale/badge_sprayed_them_all.png';
// @ts-ignore
import badge11 from '../../assets/badge_finale/badge_stay_hydraded.png';
// @ts-ignore
import badge12 from '../../assets/badge_finale/badge_teamwork_makes_the_dream_work.png';
// @ts-ignore
import badge13 from '../../assets/badge_finale/badge_think_outside_the_box.png';
// @ts-ignore
import badge14 from '../../assets/badge_finale/badge_volunteer_to_the_rescue.png';

// @ts-ignore
import pear from '../../assets/pear.png';

function ProfilePage() {
  const tokenData = useReducer(APIStateContext, getTokenDataReducer);
  const navigate = useNavigate();

  useEffect(() => {
    if (tokenData != null) return;
    navigate('/');
  }, []);

  return (
    <div className='page'>
      <HeaderSpacing />
      <div className='titleContainer'>
        <p>Профил</p>
      </div>
      {/* <div style={{ height: '55px' }}></div> */}
      <p className={classes.sectionTitle}>Обща информация</p>
      <div className={classes.profileInfo}>
        <ProfileInfo hasLogout={true} />
      </div>
      <div style={{ position: 'relative' }}>
        <img src={pear} className={classes.pear} />
        <p className={classes.sectionTitle}>Награди</p>
      </div>
      <div className={classes.badges}>
        <img src={badge0} className={classes.earned} />
        <img src={badge1} />
        <img src={badge2} className={classes.earned} />
        <img src={badge3} />
        <img src={badge4} className={classes.earned} />
        <img src={badge5} />
        <img src={badge6} className={classes.earned} />
        <img src={badge7} />
        <img src={badge8} className={classes.earned} />
        <img src={badge9} />
        <img src={badge10} className={classes.earned} />
        <img src={badge11} />
        <img src={badge12} className={classes.earned} />
        <img src={badge13} />
        <img src={badge14} className={classes.earned} />
      </div>
    </div>
  );
}

export { ProfilePage };
