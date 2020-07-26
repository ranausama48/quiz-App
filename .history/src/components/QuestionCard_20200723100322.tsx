import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<any> = ({ option, question, nextHanlder }) => {
  return (
    <div className="question--container">
      <div>{question}</div>

      <form>
        <ul>
          {option.map((data: string[], index: number) => (
            <li key={index}>{data}</li>
          ))}
        </ul>
        <input type="submit" />
      </form>
    </div>
  );
};
export default QuestionCard;
