"use client"

import { Hero } from "@/components/Hero/Hero";
import { useQuiz } from "@/contexts/QuizContext";

import styles from "./page.module.scss";

export default function Home() {
  const { showQuiz } = useQuiz();

  return (
    <main className={styles.main}>
      <Hero />
      {showQuiz && 'Lets play'}
    </main>
  );
}
