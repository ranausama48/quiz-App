import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    async function getCatoriesApi() {
    return   const catagories = await getCatories();
      console.log(catagories);
    }
    getCatoriesApi();
  }, []);
  return (
    <div className="app">
      <select>
        <option value=""></option>
      </select>
    </div>
  );
}

export default App;
