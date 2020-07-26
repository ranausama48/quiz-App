import React from "react";
import { getApiData } from "./api/api";
import { OverallQuiz, SingleQuestion } from "./Types/quiz_types";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);
  let [currentQues, setCurrentQues] = React.useState(0);
  React.useEffect(() => {
    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(5, "easy");
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const nextHanlder = () => {
    setCurrentQues(currentQues++);
  };
  if (!quiz.length) return <div>Loading....</div>;
  return (
    <div className="app">
      <QuestionCard
        option={quiz[currentQues].option}
        question={quiz[currentQues].question}
      />
    </div>
  );
}

export default App;
