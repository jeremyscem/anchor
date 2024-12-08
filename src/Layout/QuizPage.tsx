"use client";

import { QuizContext } from "@/context/ContextProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const QuizPage = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const {
    currentQuestion,
    selectedAnswer,
    setSelectedAnswer,
    setScore,
    setPrevAnswerIsCorrect,
    prevAnswerIsCorrect,
  } = useContext(QuizContext);

  const handleNextQuestion = () => {
    if (parseInt(selectedAnswer) === currentQuestion.answer) {
      setPrevAnswerIsCorrect(true);
      setScore((score) => score + 20);
    } else {
      setPrevAnswerIsCorrect(false);
    }
    if (currentQuestion.id === 5) {
      router.push("/scores");
    } else {
      router.push("/" + (currentQuestion.id + 1).toString());
    }
  };

  const handlePrevQuestion = () => {
    if (prevAnswerIsCorrect) {
      setScore((score) => score - 20);
    }
    router.push("/" + (currentQuestion.id - 1).toString());
  };

  useEffect(() => {
    setSelectedAnswer("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion]);
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h3>
        Your Actual Answer:{" "}
        {
          currentQuestion.options.find(
            (option) => option.optionId === parseInt(selectedAnswer)
          )?.option
        }
      </h3>
      {children}
      {currentQuestion.id > 1 && (
        <button onClick={handlePrevQuestion}>Previous</button>
      )}
      {currentQuestion.id < 5 && (
        <button disabled={selectedAnswer === ""} onClick={handleNextQuestion}>
          Next
        </button>
      )}
      {currentQuestion.id === 5 && (
        <button disabled={selectedAnswer === ""} onClick={handleNextQuestion}>
          Submit
        </button>
      )}
    </div>
  );
};

export default QuizPage;
