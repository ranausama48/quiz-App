import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    async function getCatoriesApi() {
      const catagories = await getCatories();
      console.log(catagories);
    }
    getCatoriesApi();
  }, []);
  return <div className="app"></div>;
}

export default App;
