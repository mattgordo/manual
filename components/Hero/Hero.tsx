"use client"

import React from "react";

import styles from './Hero.module.scss'
import { QUIZ_ANSWERS_KEY, useQuiz } from "@/contexts/QuizContext";
import { useLocalStorage } from "@/utils/useLocalStorage";

export const Hero = () => {
  const { setShowQuiz } = useQuiz();

  const playQuiz = () => {
    setShowQuiz?.(true);
  }

  return <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>Be good to yourself</h1>
      <p className={styles.copy}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
      <button role="button" className={styles.quizButton} onClick={playQuiz}>TAKE THE QUIZ</button>
    </div>
  </section>
}