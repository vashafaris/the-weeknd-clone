import { Layout } from '@components/common';
import TourCover from '@components/tour/TourCover/TourCover';
import TourList from '@components/tour/TourList/TourList';
import React, { FC } from 'react';

const Tour: FC = () => {
  return (
    <>
      <Layout>
        <TourCover />
        <TourList />
      </Layout>
    </>
  );
};

export default Tour;
