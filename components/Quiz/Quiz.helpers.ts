import { QUIZ_ANSWERS_KEY } from "@/contexts/QuizContext"
import { useLocalStorage } from "@/utils/useLocalStorage"

export const hasStartedQuiz = () => {
  const [getToken] = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const answers = getToken() ?? [];

  return answers.length > 0;
}
