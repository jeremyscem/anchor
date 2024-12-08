"use client";
import { QuizContext } from "@/context/ContextProvider";
import { Question } from "@/types";
import { useContext, useEffect } from "react";

const QuizContent = ({ currentQuestion }: { currentQuestion: Question }) => {
  const { setSelectedAnswer, setCurrentQuestion } = useContext(QuizContext);

  useEffect(() => {
    setCurrentQuestion(currentQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);
  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      {currentQuestion.options.map((option, i) => (
        <label
          key={i}
          style={{
            display: "block",
            marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setSelectedAnswer(e.currentTarget.value);
            }}
            type="radio"
            value={option.optionId}
            name="options"
          />
          {option.option}
        </label>
      ))}
    </div>
  );
};

export default QuizContent;
