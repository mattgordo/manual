"use client"

import React from "react";

import Link from "next/link";
import { hasPassedTest } from "./Results.helpers";

import styles from './Results.module.scss';

export const Results = () => {
  const hasPassed = hasPassedTest();

  const link = <Link href="https://www.manual.co">manual.co</Link>;

  const passedText = <p className={styles.text}>Great news! We have the perfect treatment for your hair loss. Proceed to {link} and prepare to say hello to your new hair!</p>;
  const rejectionText = <p className={styles.text}>Unfortunately, we are unable to prescribe this medication for you. This is because finasteride can alter the PSA levels, which may be used to monitor for cancer. You should discuss this further with your GP or specialist if you would still like this medication.</p>;
  
  const result = hasPassed ? passedText : rejectionText;

  return <div className={styles.results}>
    {result}
  </div>
}