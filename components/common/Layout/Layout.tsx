import React from 'react';
import Header from '../Header';

const Body = ({ children }) => {
  return (
    <main className='relative top-12 px-16 h-full bg-background'>
      {children}
    </main>
  );
};

const Layout = ({ children }) => {
  return (
    <div className='relative w-full min-h-screen bg-background'>
      <Header />
      <Body children={children} />
    </div>
  );
};

export default Layout;
