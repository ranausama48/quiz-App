import React from "react";
import { getApiData, getCatories } from "./api/api";
import { SingleQuestion } from "./Types/quiz_types";
import Main from "./components/QuizDash";
import "./App.css";
import LazyLaod from "./components/LazyLaod";

function App() {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);
  let [catagories, setCatagories] = React.useState<object[]>();
  let [apiParams, setapiParams] = React.useState<{
    questionLength: string;
    level: string;
    catagory: string;
  }>({
    questionLength: "1",
    level: "easy",
    catagory: "9",
  });
  const generateApi = () => {
    const { questionLength, level, catagory } = apiParams;

    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(
        catagory,
        questionLength,
        level
      );

      setQuiz(questions);
    }
    fetchData();
  };
  React.useEffect(() => {
    async function fetchCatory() {
      const catories: SingleQuestion[] = await getCatories();

      setCatagories(catories);
    }
    fetchCatory();
  }, []);
  const totalNumber = quiz.length;
  const changeHandler = (e: any) => {
    const value = e.target.value;
    const name = e.target.name;
    setapiParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  if (!catagories) return <LazyLaod />;
  return (
    <div className="app">
      {quiz[0] ? (
        <Main question={quiz} totalNumber={totalNumber} />
      ) : (
        <div className="inner--wraper">
          <h1>UQuiz</h1>
          <h2>Select Which Type of Quiz you want to Give</h2>
          <select onChange={changeHandler} name="catagory">
            {catagories
              ? catagories.map((data: any, index: number) => (
                  <option value={data.id}>{data.name}</option>
                ))
              : []}
          </select>

          <input
            placeholder="Enter Number of Question"
            type="number"
            name="questionLength"
            id=""
            onChange={changeHandler}
          />

          <select onChange={changeHandler} name="level">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          <button onClick={generateApi}>Start Quiz</button>
        </div>
      )}
    </div>
  );
}

export default App;
