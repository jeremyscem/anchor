import QuizContent from "@/Layout/QuizContent";
import QuizPage from "@/Layout/QuizPage";
import { ContextProvider } from "@/context/ContextProvider";
import { render, screen } from "@testing-library/react";
import { questions } from "../questions";

test("renders quiz page", () => {
  render(
    <ContextProvider>
      <QuizPage>
        <QuizContent currentQuestion={questions[0]} />
      </QuizPage>
    </ContextProvider>
  );

  // Check if the question is rendered
  expect(
    screen.getByText(/What do people traditionally eat during Hanukkah\?/)
  ).toBeInTheDocument();

  // Check if the options are rendered
  expect(screen.getByText("Sushi")).toBeInTheDocument();
  expect(screen.getByText("Latkes (potato pancakes)")).toBeInTheDocument();
  expect(screen.getByText("Birthday cake")).toBeInTheDocument();
  expect(screen.getByText("Kale chips")).toBeInTheDocument();
});
