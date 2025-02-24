import Magnet from "../blocks/Animations/Magnet/Magnet";
import TrueFocus from "../blocks/TextAnimations/TrueFocus/TrueFocus";
import ButtonComponent from "./ButtonComponent";

const NotebookOnlyContent = () => {
return(
    <>
    <TrueFocus sentence="Java, Spring, Python, MySQL, Git" />
    <Magnet padding={30} disabled={false} magnetStrength={2} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.5s ease-in-out" wrapperClassName="md:mt-8 mt-4">
        <a href="mailto:axelvaz45@gmail.com/" target="_blank" rel="noreferrer">
            <ButtonComponent onClick={ () => { console.log("Button clicked") } }>Contact me</ButtonComponent>
        </a>
    </Magnet>
    </>
    );
}

export default NotebookOnlyContent;