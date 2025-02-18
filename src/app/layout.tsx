import type { Metadata } from "next";
import { Signika } from 'next/font/google';
import "./globals.css";

const signika = Signika({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-signika'
});

export const metadata: Metadata = {
  title: "Digizelle",
  description: "Made with ❤️ by Alekxays",
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
        {children}
      </body>
    </html>
  );
}
