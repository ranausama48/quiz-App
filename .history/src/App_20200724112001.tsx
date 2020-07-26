import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    const catopried = async function getCatoriesApi() {
      return await getCatories();
    };
    getCatoriesApi();
  }, []);
  return (
    <div className="app">
      <select>
        {catagories}
        <option value=""></option>
      </select>
    </div>
  );
}

export default App;
