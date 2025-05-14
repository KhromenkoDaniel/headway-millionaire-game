'use client';

import { LayoutProps } from '@shared/types';
import { store } from '@app/store';
import { Provider } from 'react-redux';
import styles from './layout.module.scss';

export default function BaseLayout({ children }: LayoutProps) {
  return (
    <Provider store={store}>
      <main className={styles.layout}>
        <div className={styles.container}>{children}</div>
      </main>
    </Provider>
  );
}
