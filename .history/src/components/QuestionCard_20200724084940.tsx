import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<PropTypes> = ({
  option,
  question,
  score,
  nextHanlder,
  changeHandler,
}) => {
  const [selectAns, setSelectAns] = React.useState("");
  const selectChange = (event: any) => {};
  return (
    <div className="question--container">
      <div>score: {score}</div>

      <div>{question}</div>

      <form onSubmit={nextHanlder}>
        <ul>
          {option.map((data: string, index: number) => (
            <label>
              <input
                onChange={selectChange}
                type="radio"
                name="opt"
                value={data}
                key={index}
              />
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
