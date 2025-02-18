import React, { FC } from 'react';

import { TourItemProps } from './tour-list.model';

import Button from '@components/ui/Button';
import { TourLists } from './tour-list.constant';

const TourItem: FC<TourItemProps> = ({ date, location, place }) => {
  return (
    <div className='flex px-4 py-5 border-b border-gray-300'>
      <div className='flex items-center w-1/6'>
        <p className='text-sm font-light cursor-default'>{date}</p>
      </div>
      <div className='flex items-center w-2/6'>
        <p className='font-bold cursor-default'>{location}</p>
      </div>
      <div className='flex items-center w-2/6'>
        <p className='text-sm font-light cursor-default'>{place}</p>
      </div>
      <div className='flex items-center w-1/6'>
        <Button>Tickets</Button>
      </div>
    </div>
  );
};

const TourList = () => {
  return (
    <section className='relative px-16 mb-8'>
      {TourLists.map((tour, index) => {
        return (
          <TourItem
            date={tour.date}
            location={tour.location}
            place={tour.place}
            key={index}
          />
        );
      })}
    </section>
  );
};

export default TourList;
