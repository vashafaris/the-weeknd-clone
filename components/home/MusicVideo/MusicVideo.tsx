import React, { FC } from 'react';
import { MusicVideoLinks } from './music-video.constant';

const MusicVideo: FC = () => {
  return (
    <section className='relative'>
      {MusicVideoLinks.map((musicVideoLink) => {
        return (
          <div className='' key={musicVideoLink}>
            <iframe
              className='w-full mb-12 h-screen'
              src={musicVideoLink}
            ></iframe>
          </div>
        );
      })}
    </section>
  );
};

export default MusicVideo;
