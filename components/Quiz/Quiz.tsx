"use client"

import React, { useState } from "react";

import { QUIZ_ANSWERS_KEY, useQuiz } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import styles from './Quiz.module.scss'

export const Quiz = () => {
  const { setShowQuiz } = useQuiz();
  const [getToken, setToken, clearToken] = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const answers = getToken() ?? [];
  const [currentStep, setCurrentStep] = useState<number>(answers.length);

  const exitQuiz = () => {
    setShowQuiz?.(false);
  }
  
  return <div className={styles.quiz}>
    <button role="button" className={styles.exitButton} onClick={exitQuiz}>Exit quiz</button>
  </div>
}