const Navbar = () => {
  return (
    <nav className=" mt-8 mb-5 mx-auto flex flex-col">
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
        <div className="username bg-gray-200 w-9 h-9 rounded-full text-teal-600 text-lg flex items-center justify-center ring-4 ring-teal-500 cursor-pointer">ig</div>
      </div>

      <div className="tags w-full pt-5 flex items-center">
        <a href="" className="tagBtn decoration-none py-3 px-4 rounded-3xl bg-teal-500 text-white border border-solid border-transparent transition-all ease-in-out mt-3 mr-8 cursor-pointer hover:text-teal-900 hover:bg-teal-300">All</a>
      </div>
    </nav>
  );
};

export default Navbar;
