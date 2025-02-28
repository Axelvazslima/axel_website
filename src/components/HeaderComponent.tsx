import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import DeviceAwareComponent from "./DeviceAwareComponent";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex justify-between items-center w-screen h-4 bg-[#0F172A] text-gray-200 p-8 font-mono">
      <p className={`text-xl ${menu ? "hidden" : "block"}`}>AV</p>
        <DeviceAwareComponent notebookContent={ 
        <div className="flex">
            <a href="/projects" className="md:mr-4 mr-2">Projects</a>
            <a href="/certifications" className="md:mr-4 mr-2">Certifications</a>
            <a href="/posts">Posts</a>
        </div>} mobileContent={
          <><ButtonComponent className={`${menu ? "hidden" : "block"}`} onClick={() => setMenu(!menu)}>{menu ? "❌" : "Menu"}</ButtonComponent>
          <div className={`${menu ? "flex justify-between" : "hidden"}`}>
            <a href="/projects" className="md:mr-4 mr-2">Projects</a>
            <a href="/certifications" className="md:mr-4 mr-2">Certifications</a>
            <a href="/posts">Posts</a>
        </div></>
        } />
    </header>
  );
}

export default Header;