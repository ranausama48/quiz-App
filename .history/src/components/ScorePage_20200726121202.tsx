import React from "react";

const ScorePage = (props: any) => {
  const [score, setscore] = React.useState(props.score);
  React.useEffect(() => {}, [input]);
  const [state, setstate] = React.useState(false);
  console.log("props at score apge", props);
  return (
    <div>
      <button onClick={() => setstate(!state)}>re take</button>
    </div>
  );
};

export default ScorePage;
