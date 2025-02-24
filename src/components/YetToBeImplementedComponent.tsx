import ButtonComponent from "./ButtonComponent";
import SectionComponent from "./SectionComponent";
import { H2Component } from "./TextComponents";

function YetToBeImplentedComponent() {
  return(
    <SectionComponent className="justify-center items-center gap-2 h-screen w-screen">
        <H2Component>Page yet to be implemented...</H2Component>
        <a href="/">
        <ButtonComponent onClick={ () => { console.log("Button clicked") } }>Home</ButtonComponent>
        </a>
    </SectionComponent>

  )
}

export default YetToBeImplentedComponent;