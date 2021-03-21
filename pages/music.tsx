import { CoverCard, Divider, Layout } from '@components/common';
import { MusicCollection, NewMusic } from '@components/music/music.constant';
import React, { FC } from 'react';

const Music: FC = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center pt-12'>
        {NewMusic.map((music, index) => {
          return (
            <CoverCard
              className='w-1/4 m-12'
              type={music.type}
              title={music.title}
              imgSrc={music.imgSrc}
              key={index}
            />
          );
        })}
      </div>
      <Divider />
      <div className='flex flex-wrap p-8 justify-around'>
        {MusicCollection.map((music, index) => {
          return (
            <CoverCard
              className='w-1/5 m-4'
              type={music.type}
              title={music.title}
              imgSrc={music.imgSrc}
              key={index}
              hasSpotify={music.hasSpotify}
              hasItunes={music.hasItunes}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default Music;
