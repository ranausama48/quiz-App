import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<PropTypes> = ({
  option,
  question,
  score,
  nextHanlder,
  changeHandler,
}) => {
  let [userSelectAns, setUserSelectAns] = React.useState("");

  const onChange = (e: any) => {
    setUserSelectAns(e.target.value);
  };
  return (
    <div className="question--container">
      <div>score: {score}</div>

      <div>{question}</div>

      <form onSubmit={(e: React.FormEvent<EventTarget>) => nextHanlder()}>
        <ul>
          {option.map((data: string, index: number) => (
            <label>
              <input
                onChange={onChange}
                type="radio"
                required
                // checked={}
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
