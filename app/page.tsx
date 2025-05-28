"use client"

import { Hero } from "@/components/Hero/Hero";
import { QUIZ_ANSWERS_KEY, useQuiz } from "@/contexts/QuizContext";

import styles from "./page.module.scss";
import { Quiz } from "@/components/Quiz/Quiz";
import { useLocalStorage } from "@/utils/useLocalStorage";
import { useEffect } from "react";

export default function Home() {
  const { showQuiz } = useQuiz();
  const { removeItem: removeToken } = useLocalStorage(QUIZ_ANSWERS_KEY);

  // Clear answers on rerender
  useEffect(() => {
    removeToken();
  }, [showQuiz]);

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
