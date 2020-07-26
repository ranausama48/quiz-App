import React, { useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { SingleQuestion } from "../Types/quiz_types";
import ScorePage from "./ScorePage";

const QuizDash = (props: any) => {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>(props.question);
  let [score, setScore] = React.useState(0);
  const totalNumber = quiz.length;
  useEffect(() => {
    setQuiz(props.question);
    setScore(0);
  }, [props.question]);
  let [currentQues, setCurrentQues] = React.useState(0);
  console.log(props.question);

  console.log(quiz);

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
      // setScore(0);
    }
  };
  if (!quiz[0]) return <ScorePage score={score} />;
  return (
    <div className="quiz--dash">
      <QuestionCard
        score={score}
        nextHanlder={nextHanlder}
        option={quiz[currentQues].option}
        question={quiz[currentQues].question}
      />
    </div>
  );
};

export default QuizDash;
