import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
