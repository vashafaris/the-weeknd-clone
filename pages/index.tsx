import Layout from '@components/common/Layout';
import { Intro, MusicCover, MusicVideo } from '@components/home';

const Home = () => {
  return (
    <Layout>
      <Intro />
      <MusicVideo />
      <MusicCover />
    </Layout>
  );
};

export default Home;
