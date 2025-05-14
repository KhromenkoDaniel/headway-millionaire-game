import { ReactNode } from 'react';

export type Answer = {
  id: number;
  correct: boolean;
  answer: string;
};

export type LayoutProps = {
  children: ReactNode;
};
