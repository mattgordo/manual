"use client"

import React from "react";

import Link from "next/link";
import { hasPassedTest } from "./Results.helpers";

import styles from './Results.module.scss';

export const Results = () => {
  const hasPassed = hasPassedTest();

  const link = <Link href="https://www.manual.co">manual.co</Link>;

  const passedText = <div className={styles.text}>
    <h3 className={styles.title}>Great news!</h3>
    <p>We have the perfect treatment for your hair loss.</p>
    <p>Proceed to {link} and prepare to say hello to your new hair!</p>
  </div>;
  const rejectionText = <div className={styles.text}>
    <p>Unfortunately, we are unable to prescribe this medication for you.</p>
    <p>This is because finasteride can alter the PSA levels, which may be used to monitor for cancer.</p>
    <p>You should discuss this further with your GP or specialist if you would still like this medication.</p>
  </div>;
  
  const result = hasPassed ? passedText : rejectionText;

  return <div className={styles.results}>
    {result}
  </div>
}