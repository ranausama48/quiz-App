import React from "react";
const QuestionCard: React.FC<any> = ({ option, question }) => {
  return (
    <div className="question--container">
      <div>{question}</div>
      {/* {console.log(option)} */}
      <ul>
        {option.map((data: string[], index: number) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};
export default QuestionCard;
