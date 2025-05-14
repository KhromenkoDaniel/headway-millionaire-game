import { ReactNode } from 'react';

export type StartSectionProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  button?: ReactNode;
  onClick?: () => void;
  hrefTo?: string;
};
