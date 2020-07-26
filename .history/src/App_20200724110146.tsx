import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    return () => {
      async function getCatoriesApi() {
        await getCatories;
      }
    };
  }, []);
  return <div className="app"></div>;
}

export default App;
