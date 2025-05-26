import React from "react";

import styles from './Hero.module.scss'

export const Hero = () => {
  return <section className={styles.hero}>
    <div className={styles.content}>
      <h1 className={styles.title}>Be good to yourself</h1>
      <p className={styles.copy}>We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</p>
      <button role="button" className={styles.quizButton}>TAKE THE QUIZ</button>
    </div>
  </section>
}