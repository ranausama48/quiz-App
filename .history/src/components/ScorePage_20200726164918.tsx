import React from "react";
import App from "../App";
import styled from "styled-components";
const ScorePage = (props: any) => {
  React.useEffect(() => {
    async function fetchData() {
      const questions: SingleQuestion[] = await getApiData();
      console.log(questions);
    }
  }, [input]);
  const [state, setState] = React.useState<boolean>(false);
  const percentageScore = (props.score / 1) * 100;
  console.log("props at score apge", props);
  if (state === true) return <App />;
  else
    return (
      <div className="score--page">
        <div>
          Thanks for Giveing Quiz
          <h2>
            Your Score is {props.score} out of {props.totalNumber}
          </h2>
          {console.log(percentageScore)}
          <h1>your percentage is {percentageScore}</h1>
          {/* {percentageScore < 33.33
            ? "Sorry You are Fail"
            : "Ohh Great You Are Pass"} */}
        </div>
        <button onClick={() => setState(true)}>Back to home</button>
      </div>
    );
};

export default ScorePage;
