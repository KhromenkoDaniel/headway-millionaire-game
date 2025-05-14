'use client';

import { ReactNode } from 'react';

import { PrizeLadder } from '@/widgets/prize-ladder';

type QuizLayoutProps = {
  children: ReactNode;
};

export default function QuizLayout({ children }: QuizLayoutProps) {
  return (
    <>
      {children}
      <PrizeLadder />
    </>
  );
}
