"use client"

import React, { useState } from "react";

import { useQuiz } from "@/contexts/QuizContext";

import { QuizQuestion } from "./QuizQuestion";

import { getAnswers } from "./Quiz.helpers";
import { Results } from "../Results/Results";

import styles from './Quiz.module.scss';

export const Quiz = () => {
  const { questions, setShowQuiz } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);

  const answers = getAnswers();

  const hasFinishedQuiz = answers?.length >= questions?.length;

  const exitQuiz = () => {
    setShowQuiz?.(false);
  }
  
  return <div className={styles.quiz}>
    <button role="button" className={styles.exitButton} onClick={exitQuiz}><img height="40" width="40" src="/close-icon.svg" /></button>
    {hasFinishedQuiz 
     ? <Results />
     : <QuizQuestion
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          question={questions?.[currentQuestion]}
      />}
  </div>
}