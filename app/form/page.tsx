import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";

export default function Form() {
  return (
    <div className="border p-6 flex justify-center " style={{ height: "80vh" }}>
      <div
        className="bg-white container flex justify-center items-center flex-col rounded"
        style={{ height: "100%" }}
      >
        {/* <Step1 /> */}
        {/* <Step2 /> */}
        <Step4 />
      </div>
    </div>
  );
}
