import DeviceAwareComponent from "./components/DeviceAwareComponent";
import MobileOnlyContent from "./components/MobileOnlyContent";
import NotebookOnlyContent from "./components/NotebookOnlyContent";
import SectionComponent from "./components/SectionComponent";

function Home(){
    

    return(
        <SectionComponent className="md:flex-row justify-center items-center h-screen">
            <div className="flex flex-col text-center justify-center items-center font-mono m-2 md:h-2">
                <img src="/axel_metro_sp.jpg" alt="Axel Vaz" className="w-1/3 rounded-full overflow-clip mb-4" />
                <h1 className="text-5xl font-bold text-gray-100">Axel Vaz</h1>
                <h2 className="font-semibold md:text-2xl text:xl">Undergraduated computer science student</h2>
                <p className="font-normal text-sm">This site will work as my resume and will be fed as time goes on...</p>
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