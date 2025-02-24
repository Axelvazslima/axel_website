import { TextProps } from '../props/TextProps';

function H1Component({ children, className }: TextProps) {
  return <h1 className={`md:text-5xl text-3xl font-bold text-gray-100 ${className}`}>{children}</h1>;
}

function H2Component({ children, className }: TextProps) {
  return <h2 className={`font-semibold md:text-3xl text:2xl text-gray-200 ${className}`}>{children}</h2>;
}

function H3Component({ children, className }: TextProps) {
    return <h3 className={`font-semibold md:text-2xl text:xl text-gray-200 ${className}`}>{children}</h3>;
}

function PComponent({ children, className }: TextProps) {
  return <p className={`font-normal text-sm text-gray-200 ${className}`}>{children}</p>;
}

export { H1Component, H2Component, H3Component, PComponent };