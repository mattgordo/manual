"use client"

import React, { Dispatch, SetStateAction } from "react";

import { QUIZ_ANSWERS_KEY, useQuiz } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import styles from './Quiz.module.scss';
import { getAnswers } from "./Quiz.helpers";

export type QuizQuestionProps = {
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

export const QuizQuestion = ({ currentQuestion, setCurrentQuestion }: QuizQuestionProps) => {
  const { setItem: setToken}  = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const answers = getAnswers();

  const playQuiz = () => {
    answers?.push(14)
    setToken(answers)
    setCurrentQuestion(currentQuestion+1)
  }
  
  return <div className={styles.quizQuestion} data-question={currentQuestion}>
    {currentQuestion}
    <button role="button" className={styles.quizButton} onClick={playQuiz}>Answer</button>
  </div>
}