import React, { FC } from 'react';

import Layout from '@components/common/Layout';
import { Intro, MusicCover, MusicVideo, Shop } from '@components/home';

const Home: FC = () => {
  return (
    <Layout>
      <div className='px-16'>
        <Intro />
        <MusicVideo />
        <MusicCover />
        <Shop />
      </div>
    </Layout>
  );
};

export default Home;
