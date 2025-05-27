"use client"

import React, { useEffect, useState } from "react";

import { QUIZ_ANSWERS_KEY, useQuiz } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import { QuizQuestion } from "./QuizQuestion";

import styles from './Quiz.module.scss';
import { getAnswers } from "./Quiz.helpers";

export const Quiz = () => {
  const { setShowQuiz } = useQuiz();
  const { setItem: setToken} = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const answers = getAnswers();

  // Set localStorage if it does not exist already
  useEffect(() => {
    if (answers.length === 0) {
      setToken([]);
    }
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState<number>(answers?.length + 1);

  // const hasFinishedQuiz = answers?.length === 3;

  const exitQuiz = () => {
    setShowQuiz?.(false);
  }
  
  return <div className={styles.quiz}>
    <button role="button" className={styles.exitButton} onClick={exitQuiz}>EXIT QUIZ</button>
    <div className={styles.questions}>
      <QuizQuestion currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />
    </div>
  </div>
}