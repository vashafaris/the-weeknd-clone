import React, { FC } from 'react';

import Button from '@components/ui/Button';
import { CoverCard } from '@components/common';

const MusicCover: FC = () => {
  return (
    <section className='relative h-screen flex'>
      <div className='relative flex flex-1'>
        <CoverCard
          type='ALBUM'
          title='THE HIGHLIGHTS'
          imgSrc='jpg/album-cover.jpg'
        />
      </div>
      <div className='relative flex flex-1'>
        <CoverCard
          type='ALBUM'
          title='THE HIGHLIGHTS'
          imgSrc='jpg/album-cover.jpg'
        />
        <CoverCard
          type='ALBUM'
          title='THE HIGHLIGHTS'
          imgSrc='jpg/album-cover.jpg'
        />
        <CoverCard
          type='ALBUM'
          title='THE HIGHLIGHTS'
          imgSrc='jpg/album-cover.jpg'
        />
      </div>
    </section>
  );
};

export default MusicCover;
