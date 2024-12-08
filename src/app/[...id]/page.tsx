import QuizContent from "@/Layout/QuizContent";
import QuizPage from "@/Layout/QuizPage";
import { questions } from "../../../questions";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const question = questions[parseInt(id) - 1];
  return (
    <QuizPage>
      <QuizContent currentQuestion={question} />
    </QuizPage>
  );
}
