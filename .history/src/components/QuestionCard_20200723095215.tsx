import React from "react";
const QuestionCard: React.FC<any> = ({ option, question }) => {
  return (
    <div className="question--container">
      <div>{question}</div>

      <form>
        <ul>
          {option.map((data: string[], index: number) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};
export default QuestionCard;
