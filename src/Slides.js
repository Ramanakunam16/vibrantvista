import { useState } from "react";
import { Button } from "./Button";
import { Compitations, WorkShops } from "./App";
import { Drop } from "./Drop";
import arrowicon from "./arrow-icon.png";

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
        <Button onClick={handlePrevious}>
          <img
            src={arrowicon}
            alt={"rigth arrow"}
            className=" arrow rigth-arrow"
          />
        </Button>

        <Button onClick={handleNext}>
          <img
            src={arrowicon}
            alt={"left arrow"}
            className=" arrow left-arrow"
          />
        </Button>
      </div>
    </div>
  );
}
