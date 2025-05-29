import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from './Footer.module.scss';

const lists = [
  {
    listTitle: 'PRODUCT',
    links: [
      'Popular',
      'Trending',
      'Guided',
      'Products'
    ]
  },
  {
    listTitle: 'COMPANY',
    links: [
      'Press',
      'Mission',
      'Strategy',
      'About'
    ]
  },
  {
    listTitle: 'INFO',
    links: [
      'Support',
      'Customer Service',
      'Get started',
    ]
  }
];

export const Footer = () => <footer className={styles.footer}>
  <div className={styles.links}>
    <div className={styles.homeLink}>
      <Link href='/' title="Home">
        <Image src="/logo.png" alt="Manual Logo" width="40" height="40" />
      </Link>
    </div>
    <div className={styles.linksList}>
      {lists.map(({listTitle, links}) => <ul className={styles.list} key={listTitle}>
          <li className={styles.listTitle}>{listTitle}</li>
          {links.map((link) => <li key={link} className={styles.link}>
            <Link href="/">{link}</Link>
          </li>)}
        </ul>
      )}
      <ul className={styles.socialList}>
        <li className={styles.listTitle}>FOLLOW US</li>
        <ul className={styles.socialLinks}>
          <li className={styles.sociallink}>
            <Link href='/' title="Home">
              <Image src="/facebook.svg" alt="Facebook Logo" width="24" height="24" />
            </Link>
          </li>
          <li className={styles.sociallink}>
            <Link href='/' title="Home">
              <Image src="/google.svg" alt="Twitter Logo" width="24" height="24" />
            </Link>
          </li>
          <li className={styles.sociallink}>
            <Link href='/' title="Home">
              <Image src="/twitter.svg" alt="Google Logo" width="24" height="24" />
            </Link>
          </li>
        </ul>
      </ul>
    </div>
  </div>
  <div className={styles.copyright}>
    © 2021 Manual. All rights reserverd
  </div>
</footer>
