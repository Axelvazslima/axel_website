function Header() {
  return (
    <header className="flex justify-between items-center w-screen h-4 bg-[#0F172A] text-gray-200 p-8 font-mono">
        <p className="text-xl">AV</p>
        <div className="flex">
            <a href="#posts" className="mr-4">Posts</a>
            <a href="#projects">Projects</a>
        </div>
    </header>
  );
}

export default Header;