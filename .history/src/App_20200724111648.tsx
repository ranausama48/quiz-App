import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    async function getCatoriesApi() {
      const catagories: obj[] = await getCatories();
      console.log(catagories);
    }
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
