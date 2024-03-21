import React from "react";
import { donationData } from "./page";

interface Step2Props {
  setCurrStep: React.Dispatch<React.SetStateAction<number>>;
  setStep2Data: React.Dispatch<React.SetStateAction<donationData>>;
  data: donationData;
  step2Data: donationData;
}

const Step2: React.FC<Step2Props> = ({
  setCurrStep,
  setStep2Data,
  step2Data,
}) => {
  const optionData = [
    {
      name: "Light Pickup",
      cost: "FREE",
    },
    {
      name: "Heavy Pickup",
      cost: "FREE",
    },
  ];

  const handleLocationselect = (value: any) => {
    setStep2Data((prevData) => ({
      ...prevData,
      vehicalType: value.name,
    }));
  };

  const handleProceed = () => {
    setCurrStep(3);
  };
  return (
    <div
      className="flex justify-center items-center flex-col gap-4 p-4 my-5 my-md-0"
      // style={{ height: "80vh" }}
    >
      <h3 className="text-center" style={{ fontSize: "24px" }}>
        HOW DO YOU WISH TO DONATE?
      </h3>
      <h6 className="text-center">
        Options shown as per your location: Pune, Maharashtra, India
      </h6>
      <div
        className="flex justify-center border p-4 flex-col"
        style={{
          width: "100%",
          backgroundColor: "#f6f6f6",
          borderRadius: "6px",
        }}
      >
        {" "}
        <div
          className="text-center uppercase mb-4"
          style={{ fontSize: "16px", fontWeight: "600" }}
        >
          PICKUP FROM DOORSTEP
        </div>
        <div className="flex flex-col gap-3">
          {optionData.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#e6e4e4",
                cursor: "pointer",
                border: "1px solid #cccbcb",
                display: "flex",
                justifyContent: "space-between",
              }}
              className="p-4"
              onClick={() => handleLocationselect(item)}
            >
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="radio1"
                  name="radiogroup"
                  className="w-3 h-3 border-2 border-orange-500 rounded-full focus:ring-orange-500"
                />
                <div style={{ fontSize: "15px", fontWeight: "600" }}>
                  {item.name}
                </div>
              </div>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#065f06",
                }}
              >
                {item.cost}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        style={{
          backgroundColor: "#f15622",
          border: "1px solid #f15622",
          color: "#fff",
          fontWeight: "600",
          fontSize: "14px",
          width: "120px",
          alignSelf: "center",
          padding: "12px 20px",
        }}
        onClick={handleProceed}
      >
        PROCEED
      </button>
    </div>
  );
};
export default Step2;
