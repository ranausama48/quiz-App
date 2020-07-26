import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    const getCatoriesApi = async () => {
      return await getCatories();
    };
    const catagories = getCatoriesApi();
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
