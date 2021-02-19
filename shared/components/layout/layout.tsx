import React from 'react';
import Header from '../header';

const Body = ({ children }) => {
  return <main className='relative top-12 px-16 h-full'>{children}</main>;
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
