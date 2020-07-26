import React from "react";
import { getApiData } from "./api/api";
function App() {
  React.useEffect(() => {
    getApiData(5, "easy");
  }, []);
  return <div>Hello</div>;
}

export default App;
