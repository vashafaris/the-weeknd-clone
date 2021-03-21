import { FC, ReactNode } from 'react';
import cn from 'classnames';
interface Props {
  children: ReactNode;
  className?: string;
}

const Button: FC<Props> = ({ children, className }) => {
  return (
    <button
      className={cn(
        'inline-block w-fit-content border border-black font-light text-sm p-1 pl-4 pr-4 tracking-widest hover:bg-black hover:text-white transition duration-500 outline-none focus:outline-none',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
