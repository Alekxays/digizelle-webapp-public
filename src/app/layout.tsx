import type { Metadata } from "next";
import { Signika } from 'next/font/google';
import "./globals.css";

import Header from '@/components/Header';

const signika = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-signika'
});

export const metadata: Metadata = {
  title: "Digizelle - Inclusion & Épanouissement Digital",
  description: "Fondée en 2023 par deux passionnées du digital, Digizelle est une association dédiée à l'inclusion et à l'épanouissement des jeunes dans le domaine numérique. Créez un espace où chacun, quel que soit son niveau, peut se développer.",
  keywords: ["Digizelle", "association", "digital", "inclusion", "épanouissement", "jeunes", "numérique"],
  authors: [{ name: "Digizelle", url: "https://digizelle.fr" }],
  openGraph: {
    title: "Digizelle - Inclusion & Épanouissement Digital",
    description: "Fondée en 2023, Digizelle accompagne les jeunes dans leur parcours numérique en créant un espace inclusif et stimulant.",
    url: "https://digizelle.fr",
    siteName: "Digizelle",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${signika.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
