import { ReactNode, MouseEventHandler } from 'react';

interface ButtonComponentProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}

function ButtonComponent({ onClick, children }: ButtonComponentProps) {
  return <button className="md:bg-[#0F172A] md:transition-all md:duration-300 md:hover:bg-purple-800 bg-purple-900 text-gray-200 p-2 rounded-md border-2 border-gray-200 cursor-pointer md:hover:scale-120 text-center h-10 w-20" onClick={onClick}>{children}</button>;
}
export default ButtonComponent;