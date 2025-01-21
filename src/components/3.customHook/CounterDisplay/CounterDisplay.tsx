import React from 'react';
import {useCounter} from '../useCounter';
import { Button } from '../../ui/Button';
import styles from './CounterDisplay.module.scss'

export const CounterComponent: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter(10);

  return (
    <div>
      <h1 className={styles.title}>Counter: {count}</h1>
      <div className={styles.buttonGroup}>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={reset}>Reset</Button>
      </div>
    </div>
  );
};
