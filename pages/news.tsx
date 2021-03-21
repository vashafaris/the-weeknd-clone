import { Divider, Layout } from '@components/common';
import { DailyNews } from '@components/news';
import Headlines from '@components/news/Headlines';
import React, { FC } from 'react';

const News: FC = () => {
  return (
    <Layout>
      <Headlines />
      <Divider />
      <DailyNews />
    </Layout>
  );
};

export default News;
