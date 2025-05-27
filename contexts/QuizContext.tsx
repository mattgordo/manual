"use client"

import { isCSR } from "@/utils/helpers";
import { useLocalStorage } from "@/utils/useLocalStorage";
import React, { createContext, Dispatch, SetStateAction, useContext, useMemo, useState } from "react";

export const QUIZ_ANSWERS_KEY = 'quiz_answers';

export type QuizProviderType = {
  questions?: {};
  answers?: number[];
  showQuiz: boolean;
  setAnswers?: Dispatch<SetStateAction<QuizProviderType['answers']>>;
  setShowQuiz?: Dispatch<SetStateAction<QuizProviderType['showQuiz']>>;
}

const QuiztProviderState: QuizProviderType = {
  questions: {},
  answers: [],
  showQuiz: false,
}

// export const QuizProviderContext = React.createContext(QuiztProviderState);

// Create context
const QuizContext = createContext(QuiztProviderState);

// Create a provider component
export const QuizProvider = ({ children }: { children: React.ReactNode}) => {
  const [getToken] = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const localAnswers = getToken();
  const [showQuiz, setShowQuiz] = useState(false);
  const [answers, setAnswers] = useState(localAnswers);

  const questions = {};

  return (
    <QuizContext.Provider value={{ showQuiz, setShowQuiz, answers, setAnswers, questions }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the context
export const useQuiz = () => useContext(QuizContext);