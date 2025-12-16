export type LastUpdatedBy = 'increment' | 'decrement' | 'reset' | 'setStep' | null;

export interface CounterState {
  count: number;
  step: number;
  lastUpdatedBy: LastUpdatedBy;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setStep: (v: number) => void;
}
