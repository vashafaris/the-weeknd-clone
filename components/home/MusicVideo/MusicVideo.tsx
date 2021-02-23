import React from 'react';
import { MusicVideoLinks } from './music-video.constant';

const MusicVideo = () => {
  return (
    <section className='relative'>
      {MusicVideoLinks.map((musicVideoLink) => {
        return (
          <div className='' key={musicVideoLink}>
            <iframe
              className='w-full h-screen mb-12'
              src={musicVideoLink}
            ></iframe>
          </div>
        );
      })}
    </section>
  );
};

export default MusicVideo;
