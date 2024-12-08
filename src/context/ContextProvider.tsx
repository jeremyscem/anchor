"use client";

import { Question } from "@/types";
import { createContext, useState } from "react";
import { questions } from "../../questions";

export const QuizContext = createContext<{
  currentQuestion: Question;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<Question>>;
  selectedAnswer: string;
  setSelectedAnswer: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  prevAnswerIsCorrect: boolean;
  setPrevAnswerIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  currentQuestion: questions[0],
  setCurrentQuestion: () => {},
  selectedAnswer: "",
  setSelectedAnswer: () => {},
  score: 0,
  setScore: () => {},
  prevAnswerIsCorrect: false,
  setPrevAnswerIsCorrect: () => {},
});

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [prevAnswerIsCorrect, setPrevAnswerIsCorrect] = useState(false);

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        selectedAnswer,
        setSelectedAnswer,
        score,
        setScore,
        prevAnswerIsCorrect,
        setPrevAnswerIsCorrect,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
