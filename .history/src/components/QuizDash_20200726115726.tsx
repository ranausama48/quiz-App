import React, { useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { SingleQuestion } from "../Types/quiz_types";
import ScorePage from "./ScorePage";

const QuizDash = (props: any) => {
  const [quiz, setQuiz] = React.useState<SingleQuestion[]>(props.question);

  useEffect(() => {
    setQuiz(props.question);
  }, [props.question]);
  let [currentQues, setCurrentQues] = React.useState(0);
  console.log(props.question);

  console.log(quiz);

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
      alert(`Finished, Your Score is ${score} out of ${quiz.length}`);
      setCurrentQues(0);
      // setScore(0);
    }
  };
  return (
    <div>
      {/* {console.log("props", props)}
      {console.log("score", score)}
      {console.log("quiz[currentQues].option", quiz[currentQues].option)}
      {console.log("quiz[currentQues].question", quiz[currentQues].question)} */}
      {console.log(quiz[0])}
      {!quiz[0] ? (
        <ScorePage score={score} />
      ) : (
        <QuestionCard
          score={score}
          nextHanlder={nextHanlder}
          option={quiz[currentQues].option}
          question={quiz[currentQues].question}
        />
      )}
    </div>
  );
};

export default QuizDash;
