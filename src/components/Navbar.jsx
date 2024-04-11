const Navbar = () => {
  return (
    <nav className="my-[20px] mx-auto flex flex-col">
      <div className="flex items-center justify-between">
        <div className="logo">
          <a href="#" className="text-white decoration-none font-semibold text-xl">images</a>
        </div>
        <div className="w-[800px] h-[48px]">
          <input
            className="w-full h-full rounded-3xl border-none outline-none pl-5 text-base"
            type="text"
            placeholder="Search ..."
            name="search"
          />
        </div>
        <div className="username text-white text-xl">User</div>
      </div>

      <div className="tags w-full pt-5 flex items-center"></div>
    </nav>
  );
};

export default Navbar;
