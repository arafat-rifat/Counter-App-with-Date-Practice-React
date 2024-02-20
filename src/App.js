// import Steps from "./Components/Steps";
// import Counter from "./Components/Counter";
// import Date from "./Components/Date";
import { useState } from "react";
import "./index.css";

function App() {
  return (
    <div className="py-[100px]">
        <Counter />
    </div>
  );
}

// This Is For Step
const Steps = () => {
  const [step, setStep] = useState(0);

  const handleMinusStep = function () {
    if (step > 0) setStep((currentStep) => currentStep - 1);
  };

  const handlePlusStep = function () {
    if (step < 10) setStep((currentStep) => currentStep + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        className="px-2 font-bold border border-solid border-black text-3xl"
        onClick={handleMinusStep}
      >
        -
      </button>

      <div className="font-bold text-2xl">Step: {step}</div>

      <button
        className="px-2 font-bold border border-solid border-black text-3xl"
        onClick={handlePlusStep}
      >
        +
      </button>
    </div>
  );
};

// This Is For Counter
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleMinusCount = function () {
    setCount((currentCount) => currentCount - 1);
  };

  const handlePlusCount = function () {
    setCount((currentCount) => currentCount + 1);
  };

  const date = new Date();

  date.setDate(date.getDate() + count);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-3">
        <button
          className="px-2 font-bold border border-solid border-black text-3xl"
          onClick={handleMinusCount}
        >
          -
        </button>

        <div className="font-bold text-2xl">Count: {count}</div>

        <button
          className="px-2 font-bold border border-solid border-black text-3xl"
          onClick={handlePlusCount}
        >
          +
        </button>
      </div>

       <div>
        <span className="font-bold text-2xl">
          {count === 0 ? "Today is " : count > 0 ?`${count} days from today is ` : `${Math.abs(count)} days ago was `}
        </span>

        <span className="font-bold text-2xl">{date.toDateString()}</span>
      </div>
    </div>
  );
};

export default App;
