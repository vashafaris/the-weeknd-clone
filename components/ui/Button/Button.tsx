import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button className='inline-block w-fit-content border border-black font-light text-sm p-1 pl-4 pr-4 tracking-widest'>
      {children}
    </button>
  );
};

export default Button;
