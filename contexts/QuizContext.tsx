"use client"

import React, { createContext, Dispatch, SetStateAction, useContext, useState } from "react";

export type QuizProviderType = {
  questions?: {};
  answers?: {}
  showQuiz: boolean;
  setShowQuiz?: Dispatch<SetStateAction<QuizProviderType['showQuiz']>>;
}

const QuiztProviderState: QuizProviderType = {
  questions: {},
  answers: {},
  showQuiz: false,
}

// export const QuizProviderContext = React.createContext(QuiztProviderState);

// Create context
const QuizContext = createContext(QuiztProviderState);

// Create a provider component
export const QuizProvider = ({ children }: { children: React.ReactNode}) => {
  const [showQuiz, setShowQuiz] = useState(false); // default theme

  // Toggle theme between 'light' and 'dark'
  // const toggleTheme = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  // };

  return (
    <QuizContext.Provider value={{ showQuiz, setShowQuiz }}>
      {children}
    </QuizContext.Provider>
  );
};

// Custom hook to use the context
export const useQuiz = () => useContext(QuizContext);