"use client"

import { QUIZ_ANSWERS_KEY } from "@/contexts/QuizContext"
import { useLocalStorage } from "@/utils/useLocalStorage"

export const getAnswers = () => {
  const { getItem: getToken } = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const answers = getToken() ?? [];

  return answers;
}

export const hasStartedQuiz = () => {
  const answers = getAnswers();

  return answers.length > 0;
}
