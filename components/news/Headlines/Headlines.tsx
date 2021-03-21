import React from 'react';

const Headlines = () => {
  return (
    <div className='relative w-4/5 justify-self-center m-auto mt-8'>
      <img
        className='w-full mb-8 hover:opacity-80 cursor-pointer'
        src='jpg/headline-1.jpg'
        alt='headline'
      />
      <p className='font-bold text-4xl cursor-pointer'>
        THE WEEKND TEAMS UP WITH POSTMATES AS FIRST EVER ARTIST TO HIGHLIGHT
        BLACK-OWNED RESTAURANTS IN A NATIONAL CAMPAIGN FOR BLACK HISTORY MONTH
      </p>
    </div>
  );
};

export default Headlines;
