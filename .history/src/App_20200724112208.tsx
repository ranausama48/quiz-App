import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    const getCatoriesApi = async () => {
      const catogoreis = await getCatories();
    };
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
