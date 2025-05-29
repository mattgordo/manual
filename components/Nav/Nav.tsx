"use client"

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { useQuiz } from "@/contexts/QuizContext";

import styles from './Nav.module.scss';

export const Nav = () => {
  const { setShowQuiz } = useQuiz();

  return <nav className={styles.nav}>
    <Link href='/' title="Home" onClick={() => setShowQuiz?.(false)}>
      <Image src="/logo.png" alt="Manual Logo" width="40" height="40" />
    </Link>
  </nav>
}