import SubPagesComponent from "./components/SubPagesComponent";
import certificationsData from "../data/data.json";


function Certifications(){
    const certifications = certificationsData.certifications.map((certification) => certification);
    return (
        <SubPagesComponent h2="Certifications" h3="Validating my expertise with industry-recognized credentials" p="Click on its card to view them." certifications={certifications}/>
    );
}

export default Certifications;