import Head from 'next/head';
import Layout from '../../shared/components/layout';
import styles from '../../styles/Home.module.css';
import Intro from './intro/';

export default function Home() {
  return (
    <Layout>
      <Intro />
    </Layout>
  );
}
