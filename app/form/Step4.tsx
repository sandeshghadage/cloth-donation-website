import React from "react";

export default function Step4() {
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
  return (
    <div
      className="flex justify-center items-center flex-col gap-4"
      style={{ width: "40%" }}
    >
      {/* <h3 style={{ fontSize: "24px" }}>HOW DO YOU WISH TO DONATE?</h3>
      <h6 style={{ width: "70%", textAlign: "center" }}>
        Options shown as per your location: Pune, Maharashtra, India
      </h6> */}
      {/* <div
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
          PICKUP FROM DOORSTEP{" "}
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
            >
              <div style={{ fontSize: "15px", fontWeight: "600" }}>
                {item.name}
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
      >
        PROCEED
      </button> */}
    </div>
  );
}
