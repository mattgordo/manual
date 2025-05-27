import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from './Nav.module.scss';

export const Nav = () => {
  return <nav className={styles.nav}>
    <Link href='/' title="Home">
      <Image src="/logo.png" alt="Manual Logo" width="40" height="40" />
    </Link>
  </nav>
}