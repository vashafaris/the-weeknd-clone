import React, { FC } from 'react';
import cn from 'classnames';

interface NewsCardProps {
  title: string;
  imgSrc: string;
  className?: string;
}

const NewsCard: FC<NewsCardProps> = ({ className, title, imgSrc }) => {
  return (
    <div className={cn('mb-8', className)}>
      <img className='w-full' src={imgSrc} />
      <h1 className='text-lg font-bold'>{title}</h1>
    </div>
  );
};

export default NewsCard;
