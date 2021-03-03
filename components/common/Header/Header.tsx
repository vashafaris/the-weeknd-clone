import Link from 'next/link';

import { NavItems } from './header.constant';

const Header = () => {
  return (
    <header className='fixed h-14 w-full top-0 px-16 flex justify-between items-center border-b border-black z-50 bg-background'>
      <div className='flex'>
        <img className='w-40' src='png/logo.png' alt='' />
      </div>
      <Nav />
      <div className='flex'>
        <img className='w-4' src='png/email.png' alt='' />
      </div>
    </header>
  );
};

const Nav = () => {
  return (
    <nav className='flex items-center'>
      {NavItems.map((navItem, i) => {
        return (
          <li key={i} className='list-none px-8'>
            <Link href={navItem.link}>
              <span className='font-light cursor-pointer no-underline border-b hover:border-black'>
                {navItem.name}
              </span>
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Header;
