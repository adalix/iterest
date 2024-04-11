import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="w-[1300px] mx-auto my-0">
        <Navbar/>
        <div className="imgContainer"></div>
      </div>

      <div className="overlay"></div>
    </>
  );
};

export default App;
