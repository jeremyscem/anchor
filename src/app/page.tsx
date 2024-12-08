"use client";

import QuizContent from "@/Layout/QuizContent";
import { questions } from "../../questions";
import QuizPage from "../Layout/QuizPage";

export default function Home() {
  const question = questions[0];
  return (
    <QuizPage>
      <QuizContent currentQuestion={question} />
    </QuizPage>
  );
}
