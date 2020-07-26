import React from "react";
import App from "../App";

const ScorePage = (props: any) => {
  console.log("props at score apge", props);
  return (
    <div>
      <div>
        <h4>{props.score}</h4>
      </div>
      <button>re take</button>
    </div>
  );
};

export default ScorePage;
