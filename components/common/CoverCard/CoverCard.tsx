import React, { FC } from 'react';
import cn from 'classnames';

import Button from '@components/ui/Button';

interface Props {
  className?: string;
  type: string;
  title: string;
  imgSrc: string;
}

const CoverCard: FC<Props> = ({ className, type, title, imgSrc }) => {
  return (
    <div className={cn('mb-8', className)}>
      <img src={imgSrc} />
      <p className='text-sm font-light mt-4'>{type}</p>
      <h1 className='text-lg font-bold mb-2'>{title}</h1>
      <Button>Listen</Button>
    </div>
  );
};

export default CoverCard;
