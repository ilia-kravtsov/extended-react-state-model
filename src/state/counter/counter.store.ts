import { createGStore } from 'create-gstore';
import { useState } from 'react';
import type {CounterState, LastUpdatedBy} from './counter.types';

export const useCounterStore = createGStore<CounterState>(() => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [lastUpdatedBy, setLastUpdatedBy] = useState<LastUpdatedBy>(null);

  return {
    count,
    step,
    lastUpdatedBy,

    increment: () => {
      setCount(c => c + step);
      setLastUpdatedBy("increment");
    },

    decrement: () => {
      setCount(c => c - step);
      setLastUpdatedBy("decrement");
    },

    reset: () => {
      setCount(0);
      setLastUpdatedBy("reset");
    },

    setStep: (v) => {
      setStep(v);
      setLastUpdatedBy("setStep");
    }
  };
});
