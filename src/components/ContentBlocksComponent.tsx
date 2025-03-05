import { Project, Post, Certification } from "../classes/Data";
import DeviceAwareComponent from "./DeviceAwareComponent";
import { PComponent } from "./TextComponents";

interface ContentBlocksComponentProps{
  className?: string;
}

interface ProjectBlockComponentProps extends ContentBlocksComponentProps {
    project: Project;
}

interface PostBlockComponentProps extends ContentBlocksComponentProps {
    post: Post;
}

interface CertificationBlockComponentProps extends ContentBlocksComponentProps {
    certification: Certification;
}

function ProjectBlockComponent({ project, className }: ProjectBlockComponentProps) {
  return (
    <a href={project.link} target="_blank" rel="noreferrer">
    <div className={`flex flex-col items-center justify-start md:w-60 h-80 w-50 md:h-90 md:gap-2 gap-1 bg-[#070c17] rounded-xl md:border-2 border-1 border-cyan-700 md:p-4 p-2 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out ${className} overflow-hidden cursor-pointer`}>
        <img src={project.image} alt={project.title} className="w-15 h-15 mb-4" />
        <p className="font-bold">{project.title}</p>
        <PComponent>{project.description}</PComponent>
        <div className="flex flex-wrap md:justify-center justify-evenly gap-1 overflow-clip">
          {project.tags.map((tag) => (
            
            <span className={`text-xs rounded-full px-2 py-1 mx-1 w-fit h-fit ${tag === "On going" ? "bg-yellow-300" : ""} ${tag === "Soon" ? "bg-red-300" : ""} bg-gray-400 text-gray-800`}>
              {tag} {tag === "On going" && "🚧"}
            </span>
          ))}
        </div>
    </div>
    </a>
  );

}

function PostBlockComponent({ post, className }: PostBlockComponentProps) {
  return (
    <a href={`/posts/${post.id}`}>
    <div className={`flex flex-col items-center justify-center md:w-[45vw] md:h-[100%] w-[90vw] h-1/2 text-pretty md:overflow-scroll overflow-hidden pt-4 md:gap-2 gap-1 bg-[#070c17] rounded-xl md:border-2 border-1 border-cyan-700 md:p-4 p-2 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out ${className} cursor-pointer`}>
        <p className="md:font-bold font-semibold text-pretty">{post.title}</p>
        <PComponent className="md:block hidden">{post.description}</PComponent>
    </div>
    </a>
  );

}

function CertificationBlockComponent({ certification, className }: CertificationBlockComponentProps) {
  return (
    <a href={`${certification.link}`} target="_blank" rel="noreferrer">
    <div className={`flex flex-col md:overflow-hidden items-center justify-center md:w-60 h-80 w-50 md:h-90 md:gap-2 gap-1 bg-[#070c17] rounded-xl md:border-2 border-1 border-cyan-700 md:p-1 p-8 text-center md:hover:scale-105 transition-transform duration-300 ease-in-out ${className} cursor-pointer`}>
        <p className="font-bold">{certification.title}</p>
        <PComponent>{certification.company}</PComponent>
        <DeviceAwareComponent notebookContent={<PComponent>{certification.description}</PComponent>} />
        <div className="flex flex-wrap md:justify-center justify-evenly gap-1 overflow-clip">
          {certification.tags.map((tag) => (
            <span className={`text-xs rounded-full px-2 py-1 mx-1 w-fit h-fit bg-gray-400 text-gray-800`}>
              {tag}
            </span>
          ))}
        </div>
    </div>
    </a>
  );

}

export {ProjectBlockComponent, PostBlockComponent, CertificationBlockComponent};