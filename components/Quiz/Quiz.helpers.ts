"use client"

import { QUIZ_ANSWERS_KEY } from "@/contexts/QuizContext"
import { useLocalStorage } from "@/utils/useLocalStorage"

export const getAnswers = () => {
  const { getItem: getToken } = useLocalStorage<(string | boolean)[]>(QUIZ_ANSWERS_KEY);

  const answers = getToken() ?? [];

  return answers;
}

export const hasStartedQuiz = () => {
  const answers = getAnswers();

  return answers.length > 0;
}

export const hasImageAsValue = (value: string) => {
  // Get value of alt attribute in HTML string
  const regexMatch = /(?<=alt=")(.*?)(?=")/;

  return value.match(regexMatch);
}
