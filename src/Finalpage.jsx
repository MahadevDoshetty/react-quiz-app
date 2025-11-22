import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

const Finalpage = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div>
      <h1>Quiz Completed</h1>
      <h2>Your score is :  {score}</h2>
    </div>
  );
};

export default Finalpage;
