import type { Metadata } from 'next';
import '@/app/styles/globals.scss';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Who wants to be a millionaire?',
  description: 'A fun quiz game where you can test your knowledge and win prizes!',
};

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '600'],
  display: 'swap',
});

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>{children}</body>
    </html>
  );
}
