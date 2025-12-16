import { useCounterStore } from "../state/counter/counter.store";

export default function StepInput() {
  const step = useCounterStore(s => s.step);
  const setStep = useCounterStore(s => s.setStep);

  return (
    <input
      type="number"
      value={step}
      onChange={e => setStep(Number(e.target.value))}
    />
  );
}
