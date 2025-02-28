import { ReactNode, MouseEventHandler } from 'react';

interface ButtonComponentProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

function ButtonComponent({ onClick, children }: ButtonComponentProps) {
  return <button className="md:bg-[#0F172A] md:transition-all md:duration-300 md:ease-in-out md:hover:bg-purple-800 bg-inherit md:hover:shadow-xl shadow-lg shadow-blue-900 md:shadow-none text-gray-200 p-2 rounded-md border-2 border-gray-200 cursor-pointer md:hover:scale-120 text-center h-10 w-20" onClick={onClick}>{children}</button>;
}
export default ButtonComponent;