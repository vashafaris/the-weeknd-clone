import React from 'react';
import Button from '../../../shared/components/button';

const Intro = () => {
  return (
    <section className='h-screen flex justify-center items-center'>
      <div className='flex flex-col w-6/12 justify-start'>
        <h2 className='text-9xl font-bold absolute top-1/4 text-intro'>
          AFTER HOURS
        </h2>
        <Button>STREAM/DOWNLOAD</Button>
      </div>
      <div className='flex'>
        <img className='h-4/5' src='jpg/intro.jpg' alt='cover album' />
      </div>
    </section>
  );
};

export default Intro;
