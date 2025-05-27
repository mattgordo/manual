"use client"

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export const QUIZ_ANSWERS_KEY = 'quiz_answers';

export type QuizProviderType = {
  showQuiz: boolean;
  setShowQuiz?: Dispatch<SetStateAction<QuizProviderType['showQuiz']>>;
}

const QuiztProviderState: QuizProviderType = {
  showQuiz: false,
}

// Create context
const QuizContext = createContext(QuiztProviderState);

// Create a provider component
export const QuizProvider = ({ children }: { children: React.ReactNode}) => {

  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <QuizContext.Provider value={{ showQuiz, setShowQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the context
export const useQuiz = () => useContext(QuizContext);