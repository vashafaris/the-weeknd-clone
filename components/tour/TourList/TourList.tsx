import Button from '@components/ui/Button';
import React, { FC } from 'react';

interface TourItemProps {
  date: string;
  location: string;
  place: string;
}

const TourItem: FC<TourItemProps> = ({ date, location, place }) => {
  return (
    <div className='flex px-4 py-5 border-b border-gray-300'>
      <div className='flex w-1/6'>
        <p className='text-sm font-light'>{date}</p>
      </div>
      <div className='flex w-2/6'>
        <p className='font-bold'>{location}</p>
      </div>
      <div className='flex w-2/6'>
        <p className='text-sm font-light'>{place}</p>
      </div>
      <div className='flex w-1/6'>
        <Button>Tickets</Button>
      </div>
    </div>
  );
};

const TourList = () => {
  return (
    <section className='relative px-16 mb-8'>
      <TourItem
        date='JAN 19 2020'
        location='VANCOUVER, CANADA'
        place='PEPSI LIVE AT ROGERS ARENA'
      />
      <TourItem
        date='JAN 19 2020'
        location='VANCOUVER, CANADA'
        place='PEPSI LIVE AT ROGERS ARENA'
      />
    </section>
  );
};

export default TourList;
