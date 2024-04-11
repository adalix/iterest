import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="w-[1300px] mx-auto my-0">
        <Navbar/>
        <div className="imgContainer column-5 gap-4">
          <div className="box">
            <img src="" className="h-auto w-full rounded cursor-pointer" alt="" />
          </div>
        </div>
      </div>

      <div className="overlay"></div>
    </>
  );
};

export default App;
