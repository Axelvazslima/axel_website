import { useState } from "react";
import DeviceAwareComponent from "./DeviceAwareComponent";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className="flex justify-between items-center w-screen h-4 bg-[#0F172A] text-gray-200 p-8 font-mono">
      <p className={`text-xl ${menu ? "hidden" : "block"}`}>AV</p>
      <button className={`${menu ? "block" : "hidden"} bg-inherit shadow-lg shadow-blue-900 border-2 p-2 rounded-lg border-gray-100`} onClick={() => setMenu(!menu)}>Close</button>
        <DeviceAwareComponent notebookContent={ 
        <div className="flex">
            <a href="/projects" className="md:mr-4 mr-2">Projects</a>
            <a href="/certifications" className="md:mr-4 mr-2">Certifications</a>
            <a href="/posts">Posts</a>
        </div>} mobileContent={
          <><button className={`${menu ? "hidden" : "block"} shadow-lg shadow-blue-900 border-2 p-2 rounded-lg border-gray-100`} onClick={() => setMenu(!menu)}>Menu</button>
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