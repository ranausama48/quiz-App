import React from "react";
import QuestionCard from "./QuestionCard";

const QuizDash = (props: any) => {
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
