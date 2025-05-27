"use client"

import React, { Dispatch, SetStateAction } from "react";

import { QUIZ_ANSWERS_KEY } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

import styles from './Quiz.module.scss';
import { getAnswers } from "./Quiz.helpers";
import { Questions } from "./useGetQuestions";

export type QuizQuestionProps = {
  question: Questions,
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

const parser = new DOMParser();

export const QuizQuestion = ({ currentQuestion, setCurrentQuestion, question }: QuizQuestionProps) => {
  const { setItem: setAnswers}  = useLocalStorage<number[]>(QUIZ_ANSWERS_KEY);

  const { question: questionText, options } = question;

  // const displayOptions = 

  const answers = getAnswers();

  const selectAnswer = () => {
    answers[currentQuestion] = 14;
    setAnswers(answers);
    setCurrentQuestion(currentQuestion + 1);
  }
  
  return <div className={styles.quizQuestion} data-question={currentQuestion + 1}>
    <p>{questionText}</p>
    <ul>
      {options.map(({display}) => <li>{display}</li>)}
    </ul>
    <button role="button" className={styles.quizButton} onClick={selectAnswer}>Answer</button>
  </div>
}