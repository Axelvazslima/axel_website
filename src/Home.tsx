import DeviceAwareComponent from "./components/DeviceAwareComponent";
import { H1Component, H2Component, PComponent } from "./components/TextComponents";
import MobileOnlyContent from "./components/MobileOnlyContent";
import NotebookOnlyContent from "./components/NotebookOnlyContent";
import SectionComponent from "./components/SectionComponent";

function Home(){
    

    return(
        <SectionComponent className="md:flex-row justify-center items-center h-screen">
            <div className="flex flex-col text-center justify-center items-center font-mono m-2 md:h-2 gap-2">
                <img src="/axel_metro_sp.jpg" alt="Axel Vaz" className="w-1/3 rounded-full overflow-clip mb-4" />
                <H1Component>Axel Vaz</H1Component>
                <H2Component>Undergraduated computer science student</H2Component>
                <PComponent>This site will work as my resume and will be fed as time goes on...</PComponent>
            </div>
            
            <div className="flex text-sm md:text-lg flex-col text-center font-mono md:h-1/2 md:justify-center md:items-center">
                <DeviceAwareComponent mobileContent={
                    <MobileOnlyContent />
                }
                notebookContent={
                    <NotebookOnlyContent />
                } 
                />
                    
            </div>
        </SectionComponent>
    )
}

export default Home;