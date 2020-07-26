import React from "react";
import { getApiData, getCatories } from "./api/api";
import { SingleQuestion } from "./Types/quiz_types";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);
  let [currentQues, setCurrentQues] = React.useState(0);
  let [score, setScore] = React.useState(0);
  let [catagories, setCatagories] = React.useState<object[]>();
  let [apiParams, setapiParams] = React.useState<object>();

  React.useEffect(() => {
    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(5, "easy");
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
    async function fetchCatory() {
      const catories: SingleQuestion[] = await getCatories();

      setCatagories(catories);
    }
    fetchCatory();
  }, []);
  const changeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;

    console.log(name);
    setapiParams([name]:value);
  };
  const nextHanlder = (
    e: React.FormEvent<EventTarget>,
    userSelectAns: string
  ) => {
    e.preventDefault();
    let AnserStore = quiz[currentQues].answer;
    console.log(AnserStore);
    if (userSelectAns === AnserStore) {
      setScore(++score);
    }
    if (currentQues !== quiz.length - 1) {
      setCurrentQues(++currentQues);
    } else {
      alert(`Finished, Your Score is ${score} out of ${quiz.length}`);
      setCurrentQues(0);
      setScore(0);
    }
  };

  if (!quiz.length) return <div>Loading....</div>;
  return (
    <div className="app">
      <select onChange={changeHandler} name="catagoreis">
        {catagories
          ? catagories.map((data: any, index: number) => (
              <option value={data.id}>{data.name}</option>
            ))
          : []}
      </select>
      <input
        type="number"
        name="questionLength"
        id=""
        onChange={changeHandler}
      />
      <select onChange={changeHandler} name="level">
        <option value="easy">Easy</option>
        <option value="easy">Medium</option>
        <option value="easy">Hard</option>
      </select>

      <QuestionCard
        score={score}
        nextHanlder={nextHanlder}
        option={quiz[currentQues].option}
        question={quiz[currentQues].question}
      />
    </div>
  );
}

export default App;
