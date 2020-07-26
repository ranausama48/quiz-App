import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<PropTypes> = ({
  option,
  question,
  nextHanlder,
}) => {
  const [state, setstate] = React.useState(0);

  return (
    <div className="question--container">
      <div>{question}</div>

      <form onSubmit={nextHanlder}>
        <ul>
          {option.map((data: string, index: number) => (
            <label>
              <input
                changeHandler={changeHandler}
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
