import React, { FC } from 'react';

import Button from '@components/ui/Button';
import { CoverCard } from '@components/common';

const MusicCover: FC = () => {
  return (
    <section className='relative min-h-screen flex mb-16'>
      <div className='relative flex flex-1'>
        <CoverCard
          type='ALBUM'
          title='THE HIGHLIGHTS'
          imgSrc='jpg/album-cover.jpg'
        />
      </div>
      <div className='relative flex flex-1 flex-wrap justify-center'>
        <CoverCard
          className='w-2/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-1.jpg'
        />
        <CoverCard
          className='w-2/5'
          type='ALBUM'
          title='AFTER HOURS'
          imgSrc='jpg/music-cover-2.jpg'
        />
        <CoverCard
          className='w-2/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-2/5'
          type='SINGLE'
          title='HEARTLESS'
          imgSrc='jpg/music-cover-4.jpg'
        />
      </div>
    </section>
  );
};

export default MusicCover;
