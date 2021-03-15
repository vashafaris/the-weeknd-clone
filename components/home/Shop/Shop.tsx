import React from 'react';

const Shop = () => {
  return (
    <section className='relative h-screen flex items-center justify-center'>
      <h1 className='text-9xl font-bold text-center tracking-tighter z-10'>
        VISIT THE OFFICIAL ONLINE STORE
      </h1>
      <img
        className='absolute top-1/3 h-1/2 right-28'
        src='png/merch-1.png'
        alt='merch-1'
      />
    </section>
  );
};

export default Shop;
