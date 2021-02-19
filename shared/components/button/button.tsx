const Button = ({ children }) => {
  return (
    <button className='bg-white border border-black w-48 p-2'>
      {children}
    </button>
  );
};

export default Button;
