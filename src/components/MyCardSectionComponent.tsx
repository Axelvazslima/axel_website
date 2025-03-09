import Magnet from "../blocks/Animations/Magnet/Magnet";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";
import { GetContactIcons } from "../classes/Image";
import DeviceAwareComponent from "./DeviceAwareComponent";
import MobileOnlyContent from "./MobileOnlyContent";
import NotebookOnlyContent from "./NotebookOnlyContent";
import SectionComponent from "./SectionComponent";
import { H1Component, H2Component, PComponent } from "./TextComponents";
import badgesData from "../../data/data.json";

function MyCardSectionComponent(){

    const uniqueContactIcons = GetContactIcons().filter((a)=>(a.name !== "GitHub Name Logo"));

return (
    <SectionComponent className="md:flex-row justify-center items-center h-screen">
        <DeviceAwareComponent mobileContent={<MobileOnlyContent children={
                <div className="flex flex-row gap-4">
                    {badgesData.badges.filter(badge => badge.fixed === true).map((badge) => (
                        <a href={badge.link} target="_blank" rel="noopener noreferrer">
                            <img src={badge.image} alt={badge.title} className="w-10 h-10 invert brightness-0 contrast-200" />
                        </a>
                        ))}
                </div>
            } />} />
        <div className="flex flex-col text-center justify-center items-center font-mono m-2 md:h-2 gap-2">
            <img src="/axel_metro_sp.jpg" alt="Axel Vaz" className="w-1/3 rounded-full overflow-clip mb-4" />
            <H1Component>Axel Vaz</H1Component>
            <H2Component>Undergraduated computer science student</H2Component>
            <PComponent>Interested in APIs, Containerization, Cloud Computing and AI.</PComponent>
        </div>

        <div className="flex text-sm md:text-lg flex-col text-center font-mono md:h-1/2 md:justify-center md:items-center">
            <DeviceAwareComponent mobileContent={<MobileOnlyContent children={
                <div className="flex gap-4 justify-center items-center mt-8">
    {uniqueContactIcons.map((icon, index) => (
        <a href={icon.link} target="_blank" rel="noreferrer">
    <img key={index} src={icon.path} alt={icon.name} className="w-8 h-8" />
    </a>))}
    </div>} />}
                notebookContent={<NotebookOnlyContent children={
                    <>

                    <div className="flex flex-row justify-center items-center gap-4 mb-2">
                    {badgesData.badges.filter(badge => badge.fixed === true).map((badge) => (
                        <a href={badge.link} target="_blank" rel="noopener noreferrer">
                            <img src={badge.image} alt={badge.title} className="w-20 h-20 invert brightness-0 contrast-200" />
                        </a>
                    ))}
                    </div>
                    
                    <TrueFocus sentence="Java Spring MySQL Python Git Docker" />
                    
                    <div className="flex flex-row w-fit gap-4 md:mb-4 md:mt-10 justify-evenly items-center">
                        {uniqueContactIcons.map((icon, index) => (
                            <Magnet className="gap-4 cursor-pointer justify-evenly items-center" padding={1} disabled={false} magnetStrength={1} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.5s ease-in-out" wrapperClassName="md:mt-8 mt-4">
                                <a href={icon.link} target="_blank" rel="noreferrer">
                                    <img key={index} src={icon.path} alt={icon.name} className="w-8 h-8" />
                                </a>
                            </Magnet>
                        ))}
                    </div>
                    </>
                } />} />
        </div>
    </SectionComponent>
);
}

export default MyCardSectionComponent;