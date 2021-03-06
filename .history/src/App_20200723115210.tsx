import React from "react";
import { getApiData } from "./api/api";
import { OverallQuiz, SingleQuestion } from "./Types/quiz_types";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);
  let [currentQues, setCurrentQues] = React.useState(0);
  let [choseAnswer, SetChoseAnswer] = React.useState("");

  let [score, setScore] = React.useState(0);
  React.useEffect(() => {
    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(5, "easy");
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  }, []);

  const nextHanlder = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentQues !== quiz.length - 1)
    {
      if()
      setCurrentQues(currentQues++);
    }
    else {
      alert("Quiz Completed");
      setCurrentQues(0);
    }
  };
  const changeHandler = (e: any) => {
    const value = e.target.value;
    let AnserStore = quiz[currentQues].answer;
    console.log("AnserStore", AnserStore);
    console.log("value", value);
    if (AnserStore === value) {
      setScore(score++);
    }
    // console.log();
  };

  if (!quiz.length) return <div>Loading....</div>;
  return (
    <div className="app">
      {console.log(score)}
      <QuestionCard
        score={score}
        nextHanlder={nextHanlder}
        changeHandler={changeHandler}
        option={quiz[currentQues].option}
        question={quiz[currentQues].question}
      />
    </div>
  );
}

export default App;
