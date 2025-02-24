import { Experience } from "../classes/Experience";
import { PComponent } from "./TextComponents";


interface ContentBlocksComponentProps {
    className?: string;
    experience: Experience;
}

function ContentBlocksComponent({ experience, className }: ContentBlocksComponentProps) {
  return (
    <a href={experience.link} target="_blank" rel="noreferrer">
    <div className={`flex flex-col items-center justify-start md:w-60 h-80 w-50 md:h-90 md:gap-2 gap-1 bg-[#070c17] rounded-xl md:border-2 border-1 border-cyan-700 md:p-4 p-2 text-center hover:scale-105 transition-transform duration-300 ease-in-out ${className} overflow-hidden cursor-pointer`}>
        <img src={experience.image} alt={experience.name} className="w-15 h-15 mb-4" />
        <p className="font-bold">{experience.name}</p>
        <PComponent>{experience.summary}</PComponent>
        <div className="flex flex-wrap md:justify-center justify-evenly gap-1 overflow-clip">
          {experience.tags.map((tag, index) => (
            
            <span key={index} className={`text-xs rounded-full px-2 py-1 mx-1 w-fit h-fit ${tag === "On going" ? "bg-yellow-300" : ""} ${tag === "Soon" ? "bg-red-300" : ""} bg-gray-400 text-gray-800`}>
              {tag} {tag === "On going" && "🚧"}
            </span>
          ))}
        </div>
    </div>
    </a>
  );

}

export default ContentBlocksComponent;