"use client"

import React from "react";

import styles from './Hero.module.scss'
import { useQuiz } from "@/contexts/QuizContext";
import { hasStartedQuiz } from "../Quiz/Quiz.helpers";

export const Hero = () => {
  const { setShowQuiz } = useQuiz();

  const playQuiz = () => {
    setShowQuiz?.(true);
  }

  const ctaText = hasStartedQuiz() ? 'CONTINUE QUIZ' : 'TAKE THE QUIZ';

  return <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>Be good to yourself</h1>
      <p className={styles.copy}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
      <button role="button" className={styles.quizButton} onClick={playQuiz}>{ctaText}</button>
    </div>
  </section>
}