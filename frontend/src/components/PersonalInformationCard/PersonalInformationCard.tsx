// @ts-ignore
import * as classes from './PersonalInformationCard.module.scss';
import React, { useMemo, useState } from 'react';

// @ts-ignore
import playButton from '../../assets/play-button.svg';
// @ts-ignore
import pauseButton from '../../assets/pause-button.svg';

function PersonalInformationCard({
  name,
  role,
  image,
  audioFile
}: {
  name: string;
  role: string;
  image: string;
  audioFile?: string;
}) {
  const [isPlayingAudio, setIsAudioPlaying] = useState(false);

  const audio = useMemo(() => {
    if (audioFile == null) return null;
    const audio = new Audio(audioFile);
    audio.loop = true;
    return audio;
  }, []);

  const toggleAudio = () => {
    if (audio == null) return;

    if (isPlayingAudio) audio.pause();
    else audio.play();

    setIsAudioPlaying(!isPlayingAudio);
  };

  return (
    <div className={classes.personalInformationCard}>
      <div className={classes.containerInformationCard}>
        <div className={classes.cardImageContainer}>
          {/* <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Frandom&psig=AOvVaw37O_1HVNyiQFC1wGwOMfD3&ust=1694035940259000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJCJkuW1lIEDFQAAAAAdAAAAABAE" alt = "another" /> */}
          {/* <div className={classes.tempImageDiv}></div> */}
          <img src={image} className={classes.tempImageDiv} />
        </div>
        <div className={classes.cardBottom}>
          <div className={classes.cardPersonInformation}>
            <p className={classes.namePerson}>{name}</p>
            <p className={classes.positionPerson}>{role}</p>
          </div>
          {audio && (
            <img
              src={isPlayingAudio ? pauseButton : playButton}
              className={classes.audioButton}
              onClick={toggleAudio}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export { PersonalInformationCard };
