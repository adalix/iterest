import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const url = "/src/data.json";
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const datas = await response.json();
      setData(datas);
    };
    fetchData();
  },[]);


  return (
    <>
      <div className="w-[1300px] mx-auto my-0">
        <Navbar />
        <div className="columns-5 gap-4">
          {data.map((d) =>(
            <Card key={d.id} src={d.url} name={d.name} />
          ))}
        </div>
      </div>

      <div className="overlay"></div>
    </>
  );
};

export default App;
