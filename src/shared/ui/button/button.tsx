import clsx from 'clsx';
import { MouseEventHandler, PropsWithChildren } from 'react';

import styles from './button.module.scss';

type ButtonProps = Readonly<
  PropsWithChildren<{
    variant?: 'button';
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }>
>;

export default function Button({ variant = 'button', children, onClick }: ButtonProps) {
  return (
    <button className={clsx(styles.button, styles[variant])} type="button" onClick={onClick}>
      {children}
    </button>
  );
}
