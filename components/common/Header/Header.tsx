import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { NavItems } from './header.constant';

const Header = () => {
  return (
    <header className='fixed h-14 w-full top-0 px-16 flex justify-between items-center border-b border-black z-50 bg-background'>
      <div className='flex'>
        <Link href='/'>
          <img className='w-40 cursor-pointer' src='png/logo.png' alt='' />
        </Link>
      </div>
      <Nav />
      <div className='flex'>
        <img className='w-4' src='png/email.png' alt='' />
      </div>
    </header>
  );
};

const Nav = () => {
  const router = useRouter();
  return (
    <nav className='flex items-center'>
      {NavItems.map((navItem, i) => {
        let underline;

        const isPath = router.pathname === navItem.link;

        if (isPath) {
          underline = 'border-black';
        }
        return (
          <li key={i} className='list-none px-8'>
            <Link href={navItem.link}>
              <span
                className={cn(
                  'font-light cursor-pointer no-underline border-b hover:border-black pb-1',
                  underline
                )}
              >
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
