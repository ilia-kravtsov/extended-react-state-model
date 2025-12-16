import { useCounterStore } from "../state/counter/counter.store";

export default function CounterControls() {
  const increment = useCounterStore(s => s.increment);
  const decrement = useCounterStore(s => s.decrement);
  const reset = useCounterStore(s => s.reset);

  return (
    <div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>–</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
