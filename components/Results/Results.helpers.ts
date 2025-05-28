import { useQuiz } from "@/contexts/QuizContext";
import { getAnswers } from "../Quiz/Quiz.helpers";

export const hasPassedTest = () => {
  const { questions } = useQuiz();
  const answers = getAnswers();

  const hasIncorrectAnswer = questions.filter(({options}, index) => {
    return options.find(option => option.value === answers[index])?.isRejection;
  });

  return hasIncorrectAnswer.length === 0;
}
