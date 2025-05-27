"use client"

import { Hero } from "@/components/Hero/Hero";
import { useQuiz } from "@/contexts/QuizContext";

import styles from "./page.module.scss";
import { Quiz } from "@/components/Quiz/Quiz";

export default function Home() {
  const { showQuiz } = useQuiz();

  return (
    <main className={styles.main}>
      {showQuiz
        ? <Quiz />
        : <>
          <Hero />
        </>}
    </main>
  );
}
