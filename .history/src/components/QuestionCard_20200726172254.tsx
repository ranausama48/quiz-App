import React from "react";
import { PropTypes } from "../Types/quiz_types";
const QuestionCard: React.FC<PropTypes> = ({
  option,
  question,
  score,
  questionNo,
  nextHanlder,
}) => {
  let [userSelectAns, setUserSelectAns] = React.useState("");

  const onChange = (e: any) => {
    setUserSelectAns(e.target.value);
  };
  return (
    <div className="question--container">
      <div>
        <h3>Question No {questionNo + 1}</h3>
        <h2>{question}</h2>
      </div>
      <form
        onSubmit={(e: React.FormEvent<EventTarget>) =>
          nextHanlder(e, userSelectAns)
        }
      >
        <ul>
          {option.map((data: string, index: number) => (
            <label>
              <input
                onChange={onChange}
                type="radio"
                required
                checked={userSelectAns === data}
                name="opt"
                value={data}
                key={index}
              />
              {data}
            </label>
          ))}
        </ul>
        <input className="submit--button" type="submit" />
      </form>
    </div>
  );
};
export default QuestionCard;
