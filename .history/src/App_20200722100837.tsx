import React from "react";
import { getApiData } from "./api/api";
function App() {
  React.useEffect(() => {
    async function fetchData() {
      const questions = await getApiData(5, "easy");
      console.log(questions);
    }
    fetchData();
  }, []);
  return <div>Hello</div>;
}

export default App;
