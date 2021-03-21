import { CoverCard, Layout } from '@components/common';
import { MusicCollection, NewMusic } from '@components/music/music.constant';
import React, { FC } from 'react';

const Music: FC = () => {
  return (
    <Layout>
      <div className='flex flex-wrap justify-center pt-12'>
        {NewMusic.map((music) => {
          return (
            <CoverCard
              className='w-1/4 m-12'
              type={music.type}
              title={music.title}
              imgSrc={music.imgSrc}
            />
          );
        })}
      </div>
      <hr className='border-black mt-12 mb-12' />
      <div className='flex flex-wrap p-8 justify-around'>
        {MusicCollection.map((music) => {
          return (
            <CoverCard
              className='w-1/5 m-4'
              type={music.type}
              title={music.title}
              imgSrc={music.imgSrc}
            />
          );
        })}

        {/* <CoverCard
          className='w-1/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-1/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-1/5'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-1/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-1/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-1/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        />
        <CoverCard
          className='w-1/5 mr-4'
          type='SINGLE'
          title='BLINDING LIGHTS (REMIX)'
          imgSrc='jpg/music-cover-3.jpg'
        /> */}
      </div>
    </Layout>
  );
};

export default Music;
