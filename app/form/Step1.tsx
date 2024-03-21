import React from "react";
import { donationData } from "../form/page";

interface Step1Props {
  setCurrStep: React.Dispatch<React.SetStateAction<number>>;
  setStep1Data: React.Dispatch<React.SetStateAction<donationData>>;
  data: donationData;
  step1Data: donationData;
}

const Step1: React.FC<Step1Props> = ({
  setCurrStep,
  setStep1Data,
  data,
  step1Data,
}) => {
  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setStep1Data((prevData) => ({
      ...prevData,
      location: value,
    }));
  };

  const handleProceed = () => {
    setCurrStep(2);
  };

  return (
    <div
      className="flex justify-center items-center flex-col gap-4 p-3"
      style={{ height: "80vh" }}
    >
      <h3 className="text-center" style={{ fontSize: "24px" }}>
        HELP US WITH YOUR EXACT LOCATION
      </h3>
      <h6 className="text-center">
        This allows us to check if your area is within our coverage
      </h6>
      <div className="flex justify-center" style={{ width: "100%" }}>
        <div className="w-10/12 h-10 border-2 border-orange-500">
          <input
            className="w-full h-full px-2 outline-orange-500 outline-offset-1"
            placeholder="Enter your location ..."
            value={step1Data.location}
            onChange={handleLocationChange}
          />
        </div>

        <button
          className="p-2 "
          style={{
            backgroundColor: "#f15622",
            border: "1px solid #f15622",
            color: "#fff",
            fontWeight: "600",
            fontSize: "12px",
          }}
          onClick={handleProceed}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
};
export default Step1;
