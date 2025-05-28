"use client"

import React, { useEffect, useState } from "react";

import { QUIZ_ANSWERS_KEY, useQuiz } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import { QuizQuestion } from "./QuizQuestion";

import styles from './Quiz.module.scss';
import { getAnswers } from "./Quiz.helpers";
import { useGetQuestions } from "./useGetQuestions";

export const Quiz = () => {
  const { setShowQuiz } = useQuiz();
  const { setItem: setToken } = useLocalStorage<string[]>(QUIZ_ANSWERS_KEY);
  const questions = useGetQuestions();

  const answers = getAnswers();

  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  // Set localStorage and reset answers on mount
  useEffect(() => {
    setToken([]);
  }, []);

  const hasFinishedQuiz = answers?.length >= questions?.length;

  const exitQuiz = () => {
    setShowQuiz?.(false);
  }
  
  return <div className={styles.quiz}>
    <button role="button" className={styles.exitButton} onClick={exitQuiz}>EXIT QUIZ</button>
    {hasFinishedQuiz 
     ? <p>Finished</p>
     : <div className={styles.questions}>
        <QuizQuestion 
          currentQuestion={currentQuestion} 
          setCurrentQuestion={setCurrentQuestion}
          question={questions?.[currentQuestion]}
        />
      </div>}
  </div>
}