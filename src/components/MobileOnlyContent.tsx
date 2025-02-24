import ButtonComponent from "./ButtonComponent";

const MobileOnlyContent = () => {
return(
    <>
    <a href="mailto:axelvaz45@gmail.com/" target="_blank" rel="noreferrer">
        <ButtonComponent onClick={ () => { console.log("Button clicked") } }>Contact me</ButtonComponent>
    </a>
    </>
    );
}

export default MobileOnlyContent;