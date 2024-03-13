import React from "react";

export default function Step1() {
  return (
    <div
      className="flex justify-center items-center flex-col gap-4"
      style={{ width: "40%" }}
    >
      <h3 style={{ fontSize: "24px" }}>HELP US WITH YOUR EXACT LOCATION</h3>
      <h6 style={{ width: "70%", textAlign: "center" }}>
        This allows us to check if your area is within our coverage
      </h6>
      <div className="flex justify-center border" style={{ width: "100%" }}>
        <input
          className="flex-1"
          type="text"
          placeholder="Type location"
          style={{ border: "1px solid #f15622" }}
        />
        <button
          className="p-2 "
          style={{
            backgroundColor: "#f15622",
            border: "1px solid #f15622",
            color: "#fff",
            fontWeight: "600",
            fontSize: "12px",
          }}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
}
