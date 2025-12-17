import CounterDisplay from "./CounterDisplay";
import CounterControls from "./CounterControls";
import StepInput from "./StepInput";
import LastUpdated from "./LastUpdated";

export default function App() {
  return (
    <div>
      <h1>Counter — extended react state model</h1>

      <main>
        <CounterDisplay />
        <CounterControls />
        <StepInput />
        <LastUpdated />
      </main>

      <footer>
        createGstore implementation.
      </footer>
    </div>
  );
}
