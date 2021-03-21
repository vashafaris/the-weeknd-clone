import React from 'react';
import cn from 'classnames';

import { NewsList } from './daily-news.constant';

import NewsCard from '@components/common/NewsCard';

const DailyNews = () => {
  return (
    <div className='flex flex-wrap justify-center'>
      {NewsList.map((news) => {
        let width = 'w-1/4';

        const { size } = news;

        const isMedium = size === 'medium';
        const isLarge = size === 'large';

        if (isMedium) {
          width = 'w-2/5';
        }

        if (isLarge) {
          width = 'w-4/5';
        }

        return (
          <NewsCard
            className={cn('w-1/4 m-2 hover:opacity-80 cursor-pointer', width)}
            title={news.title}
            imgSrc={news.imgSrc}
            key={news.imgSrc}
          />
        );
      })}
    </div>
  );
};

export default DailyNews;
