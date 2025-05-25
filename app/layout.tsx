import localFont from 'next/font/local'

import type { Metadata } from "next";
import "./globals.scss";

import styles from './layout.module.scss';

// Just using 1 font for now
const norms = localFont({
  src: '../public/fonts/TTNorms-Medium.otf',
  variable: '--font-norms'
})

export const metadata: Metadata = {
  title: {
    template: '%s | Manual: Men\'s Healthcare Made Easy',
    default: 'Manual: Men\'s Healthcare Made Easy',
  },
  description: 'No waiting rooms or awkward conversations. Clinically proven treatments to your door. The most effective treatments. Backed by science. 365-Day Patient Support. Subscription Service.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={norms.className}>
      <body>
        <div className={styles.container}>
          {children}
        </div>
      </body>
    </html>
  );
}
