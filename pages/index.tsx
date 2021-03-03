import { FC } from 'react';

import Layout from '@components/common/Layout';
import { Intro, MusicCover, MusicVideo } from '@components/home';

const Home: FC = () => {
  return (
    <Layout>
      <div className='px-16'>
        <Intro />
        <MusicVideo />
        <MusicCover />
      </div>
    </Layout>
  );
};

export default Home;
