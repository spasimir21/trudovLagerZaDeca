// @ts-ignore
import * as classes from './EventDescription.module.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface EventInfo {
  isLeft: boolean;
  title: string;
  description: string;
  dates: string;
  hasSignUp: boolean;
}

function EventDescription(eventInfo: EventInfo) {
  return (
    <div className={classes.event} style={{ alignItems: eventInfo.isLeft ? 'end' : 'start' }}>
      <p className={classes.eventDates}>{eventInfo.dates}</p>
      <div className={classes.eventTitleContainer}>
        <p>{eventInfo.title}</p>
      </div>
      <div className={classes.eventBody} style={{ gap: eventInfo.hasSignUp ? '20px' : '0px' }}>
        <p>{eventInfo.description}</p>
        {eventInfo.hasSignUp && (
          <Link to='/signup' className={classes.button}>
            Запиши се
          </Link>
        )}
      </div>
    </div>
  );
}

export { EventDescription };
