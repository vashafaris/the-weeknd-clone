import React, { FC } from 'react';
import cn from 'classnames';

import Button from '@components/ui/Button';

interface CoverCardProps {
  type: string;
  title: string;
  imgSrc: string;
  className?: string;
  hasSpotify?: boolean;
  hasItunes?: boolean;
}

const CoverCard: FC<CoverCardProps> = ({
  className,
  type,
  title,
  imgSrc,
  hasSpotify = false,
  hasItunes = false,
}) => {
  return (
    <div className={cn('mb-8', className)}>
      <img src={imgSrc} />
      <p className='text-sm font-light mt-4'>{type}</p>
      <h1 className='text-lg font-bold mb-2'>{title}</h1>
      <div className='flex'>
        {hasSpotify && <Button className='mr-1 mb-1'>Spotify</Button>}
        {hasItunes && <Button className='mr-1 mb-1'>iTunes</Button>}

        <Button className='mr-1 mb-1'>Listen</Button>
      </div>
    </div>
  );
};

export default CoverCard;
