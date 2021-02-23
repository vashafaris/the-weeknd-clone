import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Button: FC<Props> = ({ children }) => {
  return (
    <button className='border border-black w-48 font-light text-sm p-1 tracking-widest'>
      {children}
    </button>
  );
};

export default Button;
