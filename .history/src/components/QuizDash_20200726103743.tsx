import React from "react";
import QuestionCard from "./QuestionCard";

const Main = () => {
  return (
    <QuestionCard
      score={score}
      nextHanlder={nextHanlder}
      option={quiz[currentQues].option}
      question={quiz[currentQues].question}
    />
  );
};

export default Main;
