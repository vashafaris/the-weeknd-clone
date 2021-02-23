import React from 'react';
import Footer from '../Footer';
import Header from '../Header';

const Container = ({ children }) => {
  return (
    <div className='relative w-full min-h-screen bg-background'>{children}</div>
  );
};

const Body = ({ children }) => {
  return (
    <main className='relative top-12 px-16 bg-background'>{children}</main>
  );
};

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body children={children} />
      <Footer />
    </Container>
  );
};

export default Layout;
