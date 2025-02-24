import { ReactNode } from "react";

interface SectionComponentProps {
  children: ReactNode;
  className?: string;
}

function SectionComponent ({className, children }: SectionComponentProps) {
  return(<section className={`flex flex-col text-gray-200 w-screen bg-[#0F172A] font-mono text-center p-8 ${className}`}>{ children }</section>)
}

export default SectionComponent;