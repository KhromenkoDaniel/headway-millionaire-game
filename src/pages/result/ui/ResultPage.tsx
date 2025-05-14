'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store';

import { StartSection } from '@widgets/start-section';
import { restart } from '@/entities/quiz/model/slice';
import { formatNumber } from '@/shared/lib/format-number';

export default function ResultPage() {
  const result = useSelector((state: RootState) => state.quiz.sum);
  const dispatch = useDispatch();

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <StartSection
      title={<>{formatNumber(result)} earned</>}
      subtitle="Total score:"
      button="Try again"
      onClick={handleRestart}
    />
  );
}
