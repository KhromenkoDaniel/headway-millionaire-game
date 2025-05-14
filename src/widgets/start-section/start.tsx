'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/shared/ui/button';
import { StartSectionProps } from './types';

import styles from './start.module.scss';

export default function StartSection({
  onClick,
  button,
  title,
  subtitle,
  hrefTo = '/quiz',
}: StartSectionProps) {
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
          href={hrefTo}
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
