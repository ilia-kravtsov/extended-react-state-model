import { useCounterStore } from "../state/counter/counter.store";

export default function LastUpdated() {
  const last = useCounterStore(s => s.lastUpdatedBy);

  return <p>Last updated by: {last}</p>;
}
