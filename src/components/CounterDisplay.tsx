import { useCounterStore } from "../state/counter/counter.store";

export default function CounterDisplay() {
  const count = useCounterStore(s => s.count);

  return <h2>Count: {count}</h2>;
}
