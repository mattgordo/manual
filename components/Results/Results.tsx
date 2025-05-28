"use client"

import React from "react";

import { hasPassedTest } from "./Results.helpers";

import styles from './Results.module.scss';

export const Results = () => {
  const hasPassed = hasPassedTest();

  console.log('hasPassed', hasPassed);
  
  return <div className={styles.results}>
    
  </div>
}