'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import { Button } from '@/shared/ui/button';

import styles from './start.module.scss';

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  button?: ReactNode;
  onClick?: () => void;
  linkTo?: string;
};

export default function StartSection({
  onClick,
  button,
  title,
  subtitle,
  linkTo = '/quiz',
}: Props) {
  const handleOnClick = () => {
    onClick?.();
  };

  return (
    <div className={styles['start-section']}>
      <div className={styles['start-section-image']}>
        <Image src="/hand.svg" alt="hand" fill />
      </div>

      <div className={styles['start-section__content']}>
        <div>
          {subtitle && <h2 className={styles['start-section__content-subtitle']}>{subtitle}</h2>}

          <h1 className={styles['start-section__content-title']}>{title}</h1>
        </div>
        <Link
          href={linkTo}
          prefetch={false}
          className={styles['start-section__button']}
          onClick={handleOnClick}
        >
          <Button>{button}</Button>
        </Link>
      </div>
    </div>
  );
}
