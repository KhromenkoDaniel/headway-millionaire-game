import { ReactNode } from 'react';
import styles from './layout.module.scss';

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.root}>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
