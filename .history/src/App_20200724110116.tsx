import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    return () => {};
  }, []);
  return <div className="app"></div>;
}

export default App;
