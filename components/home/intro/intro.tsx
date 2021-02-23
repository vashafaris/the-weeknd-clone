import React, { FC } from 'react';

import Button from '@components/ui/Button';

const Intro: FC = () => {
  return (
    <section className='relative h-screen flex justify-end items-center'>
      <div className='absolute flex flex-col w-full justify-center'>
        <h2 className='text-8xl font-bold text-intro'>AFTER HOURS</h2>
        <Button>STREAM/DOWNLOAD</Button>
      </div>
      <div className='flex w-8/12 justify-self-end'>
        <img className='h-4/5' src='jpg/intro.jpg' alt='cover album' />
      </div>
    </section>
  );
};

export default Intro;
