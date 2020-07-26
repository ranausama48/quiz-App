import React, { useEffect } from "react";
import { getCatories } from "./api/api";

function App() {
  useEffect(() => {
    return () => {
      async function getCatoriesApi() {
        await getCatories;
      }
      getCatoriesApi;
    };
  }, []);
  return <div className="app"></div>;
}

export default App;
