import React from "react";
import QuestionCard from "./QuestionCard";
import { SingleQuestion } from "../Types/quiz_types";

const QuizDash = (props: any) => {
  let [currentQues, setCurrentQues] = React.useState(0);
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>([]);

  let [score, setScore] = React.useState(0);
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
  return (
    <div>
      {console.log(props)}
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
