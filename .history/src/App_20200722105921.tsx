import React from "react";
import { getApiData } from "./api/api";
import { OverallQuiz, SingleQuestion } from "./Types/quiz_types";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [quiz, setQuiz] = React.useState<OverallQuiz[]>([]);
  React.useEffect(() => {
    async function fetchData() {
      const questions: OverallQuiz[] = await getApiData(5, "easy");
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);
  return (
    <div className="app">
      {console.log(quiz)}

      <QuestionCard />
    </div>
  );
}

export default App;
