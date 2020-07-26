import React from "react";

const ScorePage = (props: any) => {
  const [score, setscore] = React.useState();
  const [state, setstate] = React.useState(false);

  React.useEffect(() => {
    setscore(props.score);
  }, [state]);
  console.log("props at score apge", props);
  return (
    <div>
      <button onClick={() => setstate(!state)}>re take</button>
    </div>
  );
};

export default ScorePage;
