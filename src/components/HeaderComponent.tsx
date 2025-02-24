function Header() {
  return (
    <header className="flex justify-between items-center w-screen h-4 bg-[#0F172A] text-gray-200 p-8 font-mono">
        <p className="text-xl">AV</p>
        <div className="flex">
            <a href="/projects" className="md:mr-4 mr-2">Projects</a>
            <a href="/posts">Posts</a>
        </div>
    </header>
  );
}

export default Header;