"use client"

import { Questions, useGetQuestions } from "@/components/Quiz/useGetQuestions";
import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export const QUIZ_ANSWERS_KEY = 'quiz_answers';

export type QuizProviderType = {
  questions: Questions[];
  showQuiz: boolean;
  setShowQuiz?: Dispatch<SetStateAction<QuizProviderType['showQuiz']>>;
}

const QuiztProviderState: QuizProviderType = {
  questions: [],
  showQuiz: false,
}

// Create context
const QuizContext = createContext(QuiztProviderState);

// Create a provider component
export const QuizProvider = ({ children }: { children: React.ReactNode}) => {
  const [showQuiz, setShowQuiz] = useState(false);
  const questions = useGetQuestions();

  return (
    <QuizContext.Provider value={{ questions, showQuiz, setShowQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the context
export const useQuiz = () => useContext(QuizContext);