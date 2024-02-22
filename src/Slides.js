import { useState } from "react";
import { Button } from "./Button";
import { Compitations, WorkShops } from "./App";
import { Drop } from "./Drop";

export function Slides() {
  const [step, setStep] = useState(0);

  function handlePrevious() {
    if (step >= 0) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step <= 3) {
      setStep((s) => s + 1);
    }
  }

  return (
    <div>
      {step === 1 && (
        <>
          <Compitations />
          <Drop />
        </>
      )}
      {step === 2 && (
        <>
          <WorkShops />
          <Drop />
        </>
      )}

      <div className="buttons">
        <Button bgColor="#fff" onClick={handlePrevious}>
          <span>⬅</span>
        </Button>

        <Button bgColor="#fff" onClick={handleNext}>
          <span>➡</span>
        </Button>
      </div>
    </div>
  );
}
