import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<PropTypes> = ({
  option,
  question,
  nextHanlder,
}) => {
  return (
    <div className="question--container">
      <div>{question}</div>

      <form>
        <ul>
          {option.map((data: string, index: number) => (
            <label>
              <input type="radio" name="opt" value={data} key={index} />
              {data}
            </label>
          ))}
        </ul>
        <input type="submit" />
      </form>
    </div>
  );
};
export default QuestionCard;
