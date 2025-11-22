import React, { useContext } from "react";
import { ScoreContext } from "./ScoreContext";

const Finalpage = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div>
      <h1>Quiz Completed</h1>
      <h2>You have scored {score}</h2>
    </div>
  );
};

export default Finalpage;
