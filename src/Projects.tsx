import SubPagesComponent from "./components/SubPagesComponent";
import { Experiences } from "./classes/Experience";

function Projects() {
    const experiences = Experiences.filter(exp => exp.type === 'p');
    return(
        <SubPagesComponent 
            h2="Projects" 
            h3="Explore My Projects" 
            p="I have been involved in a diverse range of projects, from web development to API design and infrastructure. Below are some of the projects I own or have contributed to. Most of them are open source, so feel free to dive in and explore." 
            experiences={experiences} 
            filtering="p" 
        />
    )
}

export default Projects;