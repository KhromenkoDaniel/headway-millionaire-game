'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '@/app/store';

import { Option } from 'src/shared/ui/option';
import { Answer } from '@/shared/types';
import { selectCurrentQuestion, selectQuizStatus, verifyAnswerAsync } from '@/entities/quiz/model';

import { getAnswerLetter } from '@shared/lib/get-answer-letter';
import styles from './quiz.module.scss';

function getDataCorrect(answer: Answer, id: number | null) {
  if (!id) return undefined;

  if (id === answer.id) {
    return answer.correct;
  }
  return answer.correct || undefined;
}

function getDataDisabled(answer: Answer, id: number | null) {
  if (!id) return undefined;

  return id !== answer.id;
}

export default function QuizPage() {
  const dispatch = useDispatch<AppDispatch>();
  const question = useSelector(selectCurrentQuestion);
  const quizStatus = useSelector(selectQuizStatus);
  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (quizStatus !== 'progress') {
      router.push('/result');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quizStatus]);

  if (!question) return null;

  const handleVerifyAnswer = (answer: Answer) => {
    dispatch(verifyAnswerAsync(answer));
    setSelectedAnswerId(answer.id);

    setTimeout(() => {
      setSelectedAnswerId(null);
    }, 1000);
  };

  const handleOnClick = (answer: Answer) => () => {
    handleVerifyAnswer(answer);
  };

  return (
    <div className={styles.quiz}>
      <h1 className={styles.quiz__title}>{question.question}</h1>
      <div className={styles.quiz__answers}>
        {question.answers.map((answer, index) => (
          <div key={answer.id} className={styles['quiz__answer-item']}>
            <Option
              size="lg"
              data-active={selectedAnswerId === answer.id}
              data-correct={getDataCorrect(answer, selectedAnswerId)}
              data-disabled={getDataDisabled(answer, selectedAnswerId)}
              onClick={handleOnClick(answer)}
              letter={getAnswerLetter(index)}
            >
              {answer.answer}
            </Option>
          </div>
        ))}
      </div>
    </div>
  );
}
