import Button from '@components/ui/Button';
import React, { FC } from 'react';

interface Props {
  type: string;
  title: string;
  imgSrc: string;
}

const CoverCard: FC<Props> = ({ type, title, imgSrc }) => {
  return (
    <div>
      <img src={imgSrc} alt='' />
      <p className='text-sm font-light leading-loose'>{type}</p>
      <h1 className='text-lg font-bold leading-loose'>{title}</h1>
      <Button>Listen</Button>
    </div>
  );
};

export default CoverCard;
