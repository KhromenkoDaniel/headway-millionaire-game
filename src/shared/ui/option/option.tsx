'use client';

import clsx from 'clsx';
import { KeyboardEvent, PropsWithChildren } from 'react';

import Hexagon from './hexagon';

import styles from './option.module.scss';

type OptionProps = PropsWithChildren<{
  'data-active'?: boolean;
  'data-disabled'?: boolean;
  size: 'sm' | 'lg';
  className?: string;
  letter?: string;
  onClick?: () => void;
}>;

export default function Option({
  size,
  children,
  className,
  onClick,
  letter,
  ...dataAttributes
}: OptionProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onClick?.();
    }
  };

  return (
    <div
      className={clsx(styles.option, styles[size], className)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...dataAttributes}
    >
      <span
        role="button"
        tabIndex={0}
        className={styles.hexagonContainer}
        onKeyDown={handleKeyDown}
        onClick={onClick}
      >
        <Hexagon className={styles.hexagon} size={size} />
        <div className={styles.optionItem}>
          {letter && <span className={styles.letter}>{letter}</span>}
          {children}
        </div>
      </span>
    </div>
  );
}
