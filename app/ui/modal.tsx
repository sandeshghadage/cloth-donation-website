"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import useMultiStepForm from "../customHooks/useMultiStepForm";
import WelcomeStep from "./formSteps/locationStep";
import HowStep from "./formSteps/howStep";
import DonationForm from "./formSteps/donateitem";

export default function FlowByteModal() {
  const [openModal, setOpenModal] = useState(false);
  // const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
  //   useMultiStepForm([<WelcomeStep />, <HowStep />, <DonationForm/>]);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Schedule Pickup</Button>

      {/* <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <div
          style={{
            position: "relative",
            background: "white",
            border: "1px solid red",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            // fontFamily: "Arial",
            // width: "80vw"
          }}
        >
          <form>
            <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
            >
              {!isFirstStep && (
                <button type="button" onClick={back}>
                  Back
                </button>
              )}
              <button type="button" onClick={next}>
                {isLastStep ? "Finish" : "Next"}
              </button>
            </div>
          </form>
        </div>
      </Modal> */}
    </>
  );
}
