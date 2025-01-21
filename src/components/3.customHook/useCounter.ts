import { useState } from 'react';

// Custom Hook untuk mengelola counter
export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
}
