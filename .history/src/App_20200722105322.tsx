import React from "react";
import { getApiData } from "./api/api";
import { OverallQuiz, SingleQuestion } from "./Types/quiz_types";

function App() {
  React.useEffect(() => {
    async function fetchData() {
      const questions: OverallQuiz[] = await getApiData(5, "easy");
      console.log(questions);
    }
    fetchData();
  }, []);
  return <div>Hello</div>;
}

export default App;
