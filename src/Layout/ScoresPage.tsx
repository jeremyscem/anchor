"use client";

import { QuizContext } from "@/context/ContextProvider";
import { useContext } from "react";

const ScoresPage = () => {
  const { score } = useContext(QuizContext);
  return <div>Your score is: {score}</div>;
};

export default ScoresPage;
