import React from "react";
import App from "../App";
const ScorePage = (props: { score: number; totalNumber: number }) => {
  const [state, setState] = React.useState<boolean>(false);
  const percentageScore = ((props.score / props.totalNumber) * 100).toFixed(2);

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
          Give Appreciation by Giving stars ⭐ on
          <a href="https://github.com/ranausama48/quiz-App" target="_blank">
            <svg
              className="octicon octicon-mark-github v-align-middle"
              height="18"
              viewBox="0 0 16 16"
              version="1.1"
              width="24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>

            <span>Github </span>
          </a>
          and Do contribute to make UQuiz App Much Better
        </div>
      </div>
    );
};

export default ScorePage;
