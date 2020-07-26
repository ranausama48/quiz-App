import React from "react";

const LazyLaod = () => {
  const div1 = document.querySelector("h1");
  console.log("useref", div1);
  return (
    <div className="app">
      <h1 ref={div1} className="rotate">
        U Quiz
      </h1>
    </div>
  );
};

export default LazyLaod;
