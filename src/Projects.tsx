import SubPagesComponent from "./components/SubPagesComponent";
import { Experience, Experiences } from "./classes/Experience";

function Projects() {
    const experiences = Experiences.filter(exp => exp.type === 'p');
    return(
        <>
            {experiences.map((exp: Experience) => (
                <SubPagesComponent h2="Projects" h3="Some of my projects" p="Here are some of the projects I've worked on. Most of them are open Source. Feel free to check them out and learn from them." experience={exp} />
            ))}
        </>
    )
}

export default Projects;