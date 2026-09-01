import { useState, useEffect } from 'react';
import { Counter } from '../types';

const STORAGE_KEY = 'counter_data';

const DEFAULT_COUNTER: Counter = { value: 0 };

function loadFromStorage(): Counter {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Counter;
      return parsed;
    }
  } catch {
    // ignore
  }
  return DEFAULT_COUNTER;
}

export function useLocalStorage() {
  const [counter, setCounter] = useState<Counter>(loadFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(counter));
  }, [counter]);

  function increment() {
    setCounter(prev => ({ value: prev.value + 1 }));
  }

  function decrement() {
    setCounter(prev => ({ value: prev.value - 1 }));
  }

  function reset() {
    setCounter({ value: 0 });
  }

  function updateValue(value: number) {
    setCounter({ value });
  }

  return {
    counter,
    increment,
    decrement,
    reset,
    updateValue,
  };
}