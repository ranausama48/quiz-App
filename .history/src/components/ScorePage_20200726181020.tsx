import React from "react";
import App from "../App";
const ScorePage = (props: { score: number; totalNumber: number }) => {
  const [state, setState] = React.useState<boolean>(false);
  const percentageScore = (props.score / props.totalNumber) * 100;
  console.log("props at score apge", props);
  if (state === true) return <App />;
  else
    return (
      <div>
        <div className="score--page">
          <div>
            <h1>Thanks for Giving Quiz from UQuiz</h1>
            <h2>
              Your Score is {props.score} out of {props.totalNumber}
            </h2>
            {console.log(percentageScore)}
            <div className="percentage--row">
              <span>Percentage</span>
              <div className="percentage--box">{percentageScore} %</div>
            </div>

            {percentageScore < 33.33 ? (
              <h3 className="fail">Sorry You are Fail</h3>
            ) : (
              <h3 className="success">Ohh Great You Are Pass</h3>
            )}
          </div>
          <button onClick={() => setState(true)}>Back to home</button>
        </div>

        <div className="score--page footer--quotes">
          Give Appreciation by Giving stars ⭐ on Github and Do contribute to
          make UQuiz App Much Better
        </div>
      </div>
    );
};

export default ScorePage;
