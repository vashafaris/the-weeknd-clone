import React, { FC } from 'react';

import { CoverCard } from '@components/common';

const MusicCover: FC = () => {
  return (
    <section className='relative min-h-screen flex mb-16'>
      <div className='relative flex flex-1 mr-4'>
        <CoverCard
          className='m-1'
          type='ALBUM'
          title='THE HIGHLIGHTS'
          imgSrc='jpg/album-cover.jpg'
        />
      </div>
      <div className='relative flex flex-1 flex-wrap justify-around'>
        <CoverCard
          className='w-2/5 m-1'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-1.jpg'
        />
        <CoverCard
          className='w-2/5 m-1'
          type='ALBUM'
          title='AFTER HOURS'
          imgSrc='jpg/music-cover-2.jpg'
        />
        <CoverCard
          className='w-2/5 m-1'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-2/5 m-1'
          type='SINGLE'
          title='HEARTLESS'
          imgSrc='jpg/music-cover-4.jpg'
        />
      </div>
    </section>
  );
};

export default MusicCover;
