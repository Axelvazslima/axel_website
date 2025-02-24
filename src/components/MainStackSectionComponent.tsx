import { SvgIcons } from "../classes/Image";
import SectionComponent from "./SectionComponent";

function MainStackSectionComponent(){
    return (
        <SectionComponent className="flex-wrap items-center justify-center h-screen">
        <h2 className="md:mb-8 md:text-3xl text-2xl font-mono font-semibold">My Main Stack</h2>
        <ul className="flex">
            {SvgIcons.map((icon, index) => (
            icon.domain.includes("stack") ? (
                <li key={index} className="md:hover:scale-110 md:cursor-pointer md:p-8 p-4 items-center justify-center text-center">
                    <a href={icon.link} target="_blank">
                    <img src={icon.path} alt={icon.name} className="w-20 h-20"/>
                    <p className="md:block hidden">{icon.name}</p>
                    </a>
                </li>
            ) : null
            ))}
        </ul>
        <h3 className="text-lg">These are the technologies I am most comfortable using and most interested in. Even though I have hands-on experience with other areas and stacks - such as web development using TypeScript (React and Angular), Next.js, and Tailwind CSS - these are the ones that I want to specialize in and enjoy working with the most.</h3>
        </SectionComponent>
    )
}

export default MainStackSectionComponent;