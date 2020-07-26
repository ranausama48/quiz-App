import React from "react";
import { getApiData, getCatories } from "../api/api";
import { SingleQuestion } from "../Types/quiz_types";
import QuestionCard from "../components/QuestionCard";
import Main from "../components/QuizDash";

function App() {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);
  let [currentQues, setCurrentQues] = React.useState(0);
  let [score, setScore] = React.useState(0);
  let [catagories, setCatagories] = React.useState<object[]>();
  let [apiParams, setapiParams] = React.useState<{
    questionLength: string;
    level: string;
  }>({
    questionLength: "1",
    level: "easy",
  });
  const generateApi = () => {
    const { questionLength, level } = apiParams;
    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(
        questionLength,
        level
      );
      console.log(questions);
      setQuiz(questions);
    }
    fetchData();
  };
  React.useEffect(() => {
    const { questionLength, level } = apiParams;
    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData(
        questionLength,
        level
      );
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
    setapiParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
      setQuiz([]);
      // alert(`Finished, Your Score is ${score} out of ${quiz.length}`);

      setCurrentQues(0);
      setScore(0);
    }
  };

  // if (!quiz.length) return <div>Loading....</div>;
  return (
    <QuestionCard
      score={score}
      nextHanlder={nextHanlder}
      option={quiz ? quiz[currentQues].option : null}
      question={quiz[currentQues].question}
    />
  );
}

export default App;
