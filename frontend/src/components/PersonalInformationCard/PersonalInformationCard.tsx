// @ts-ignore
import * as classes from './PersonalInformationCard.module.scss';
import React from 'react';

function PersonalInformationCard({ name, role }: { name: string, role: string }) {
  return (
  
  <div className={classes.personalInformationCard}>

    <div className={classes.containerInformationCard}>
        <div className={classes.cardImageContainer}>
          {/* <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw37O_1HVNyiQFC1wGwOMfD3&ust=1694035940259000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCJkuW1lIEDFQAAAAAdAAAAABAE" alt = "another" /> */}
              <div className={classes.tempImageDiv}></div>
              </div>
          <div className={classes.cardPersonInformation}>
            <p className={classes.namePerson}>{name}</p>
            <p className={classes.positionPerson}>{role} </p>
          </div>
    </div>
    
         
  </div>
  ) ;
}

export { PersonalInformationCard };
