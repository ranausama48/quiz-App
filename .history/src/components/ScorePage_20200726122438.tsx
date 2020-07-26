import React from "react";
import App from "../App";

const ScorePage = (props: any) => {
  const [state, setState] = React.useState<boolean>(false);
  console.log("props at score apge", props);
  if (state === true) return <App />;
  else
    return (
      <div>
        <div>
          <h4>{props.score}</h4>
        </div>
        <button onClick={() => setState(true)}>re take</button>
      </div>
    );
};

export default ScorePage;
