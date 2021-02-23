import Head from 'next/head';
import '@assets/main.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>T H E W E E K N D</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
