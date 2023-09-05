import { HeaderSpacing } from '../../components/HeaderSpacing/HeaderSpacing';
// @ts-ignore
import * as classes from './ContactsPage.module.scss';
import React from 'react';

function ContactsPage() {
  return (
    <div className='page'>
      <HeaderSpacing />
      <div className={classes.section}></div>
    </div>
  );
}

export { ContactsPage };
