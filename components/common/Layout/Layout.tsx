import React, { FC, ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';

interface Props {
  children: ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  return (
    <div className='relative w-full min-h-screen bg-background'>{children}</div>
  );
};

const Body: FC<Props> = ({ children }) => {
  return (
    <main className='relative top-12 px-16 bg-background'>{children}</main>
  );
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Body children={children} />
      <Footer />
    </Container>
  );
};

export default Layout;
