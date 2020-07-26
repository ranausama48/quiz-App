import React from "react";
import { getApiData } from "./api/api";
function App() {
  React.useEffect(() => {
    async function fetchData() {
      const res = await getApiData(5, "easy");
    }
  }, []);
  return <div>Hello</div>;
}

export default App;
