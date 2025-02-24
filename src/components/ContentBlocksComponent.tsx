import { Experience } from "../classes/Experience";
import { H3Component } from "./TextComponents";


interface ContentBlocksComponentProps {
    className?: string;
    experience: Experience;
}

function ContentBlocksComponent({ experience, className }: ContentBlocksComponentProps) {
  return (
    <div className={`flex flex-col items-center justify-center md:w-[20%] w-[75%] md:h-[15%] h-[50%] md:gap-2 gap-1 bg-[#070c17] rounded-xl md:border-2 border-1 border-cyan-700 md:p-4 p-1 text-center hover:scale-105 transition-transform duration-300 ease-in-out ${className}`}>
        <img src={experience.image} alt={experience.name} className="w-15 h-15 overflow-clip mb-4" />
        <H3Component>{experience.name}</H3Component>
        <H3Component>{experience.description}</H3Component>
    </div>
  );

}

export default ContentBlocksComponent;