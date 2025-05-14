'use client';

import clsx from 'clsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Option } from 'src/shared/ui/option';
import Burger from '@/widgets/prize-ladder/ui/burger';
import { selectCurrentQuestion, selectPrizeSteps } from '@/entities/quiz/model';

import { formatNumber } from '@/shared/lib/format-number';
import styles from './prize-ladder.module.scss';

export default function PrizeLadder() {
  const prizes = useSelector(selectPrizeSteps);
  const potentialPrize = useSelector(selectCurrentQuestion)?.sum || 0;
  const [opened, setOpened] = useState(false);

  const handleToggle = () => {
    setOpened(prevIsOpen => !prevIsOpen);
  };

  return (
    <>
      <button
        aria-label="Open burger menu"
        className={styles['prize-ladder__burger']}
        onClick={handleToggle}
        type="button"
      >
        <Burger isOpen={opened} />
      </button>

      <aside
        className={clsx(styles['prize-ladder'], {
          [styles['prize-ladder--opened']]: opened,
        })}
      >
        <dl className={styles['prize-ladder__prize-list']}>
          {prizes.map(prize => (
            <dt key={prize} className={styles['prize-ladder__prize-item']}>
              <Option
                size="sm"
                data-active={prize === potentialPrize}
                data-disabled={prize < potentialPrize}
              >
                {formatNumber(prize)}
              </Option>
            </dt>
          ))}
        </dl>
      </aside>
    </>
  );
}
