import React, { FC } from 'react';

const TourCover: FC = () => {
  return (
    <section className='relative'>
      <img
        className='h-screen w-screen block'
        src='/png/tour.png'
        alt='tour cover'
      />
    </section>
  );
};

export default TourCover;
