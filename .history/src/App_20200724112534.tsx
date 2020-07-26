import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  const [catagories, setCatagories] = React.useState();
  useEffect(() => {
    const getCatoriesApi = async () => {
      const catagories = await getCatories();
      setCatagories(catagories);
    };
    getCatoriesApi();
  }, []);
  return (
    <div className="app">
      <select>
        {catagories.map(() => {})}
        <option value=""></option>
      </select>
    </div>
  );
}

export default App;
