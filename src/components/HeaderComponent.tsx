import { useState } from "react";
import DeviceAwareComponent from "./DeviceAwareComponent";
import { AnimatePresence, motion } from "framer-motion";

function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <header className={`flex ${menu ? "justify-end" : "justify-between"} items-center w-screen h-4 bg-[#0F172A] text-gray-200 p-8 font-mono`}>
      <a href="/">
      <p className={`text-xl ${menu ? "hidden" : "block"}`}>AV</p></a>
      <AnimatePresence>
        {menu && (
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-inherit shadow-lg shadow-red-800 border-2 p-2 mr-2 rounded-lg border-gray-100"
            onClick={() => setMenu(!menu)}
          >
            Close
          </motion.button>
        )}
      </AnimatePresence>
      
        <DeviceAwareComponent notebookContent={ 
        <div className="flex">
            <a href="/projects" className="md:mr-4 mr-2">Projects</a>
            <a href="/certifications" className="md:mr-4 mr-2">Certifications</a>
            <a href="/posts">Posts</a>
        </div>} mobileContent={
          <AnimatePresence>
          {<motion.div initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}><button className={`${menu ? "hidden" : "block"} shadow-lg shadow-blue-900 border-2 p-2 rounded-lg border-gray-100`} onClick={() => setMenu(!menu)}>Menu</button>
          <div className={`${menu ? "flex justify-between flex-wrap font-stretch-100% text-sm" : "hidden"}`}>
            <a href="/projects" className="md:mr-4 mr-2">Projects</a>
            <a href="/certifications" className="md:mr-4 mr-2">Certifications</a>
            <a href="/posts">Posts</a>
        </div></motion.div>}</AnimatePresence>
        }/>
    </header>
  );
}

export default Header;