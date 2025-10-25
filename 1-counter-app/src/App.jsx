import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";
import { useState } from "react";

function App() {
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  return (
    <div className="counter-app">
      <h1 className="title">Counter</h1>

      <div
        className="counter-card"
        role="group"
        aria-label="Counter example (static)"
      >
        <div className="display" aria-live="polite">
          {value}
        </div>

        {/* Step selector UI (visual only - no logic) */}
        <div className="step-row">
          <div className="step-label">Step</div>
          <div
            className="step-badges"
            role="toolbar"
            aria-label="Step size (UI only)"
          >
            <button
              className="badge"
              aria-pressed="true"
              onClick={() => setStep(1)}
            >
              1
            </button>
            <button
              className="badge"
              aria-pressed="true"
              onClick={() => setStep(2)}
            >
              2
            </button>
            <button
              className="badge"
              aria-pressed="true"
              onClick={() => setStep(5)}
            >
              5
            </button>
          </div>
        </div>

        {/* Static progress bar showing progress toward next step (no logic) */}
        <div className="step-progress" aria-hidden="true">
          <div
            className="step-progress-bar"
            style={{ width: step === 1 ? "10%" : step === 2 ? "60%" : "100%" }}
          ></div>
        </div>

        <div className="controls">
          <button
            className="btn decrease"
            disabled={!value ? true : false}
            aria-label="Decrease"
            onClick={() => dispatch(decrement(step))}
          >
            −
          </button>
          <button
            className="btn reset"
            disabled={!value ? true : false}
            aria-label="Reset"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            className="btn increase"
            aria-label="Increase"
            onClick={() => dispatch(increment(step))}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
