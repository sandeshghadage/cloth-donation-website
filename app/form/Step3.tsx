import React, { useEffect, useState } from "react";
import Image from "next/image";
import { donationData } from "./page";

// interface Option {
//   name: string;
//   qty: number;
//   volume: number;
// }

interface Step3Data {
  cartItems: { volume: number; qty: number }[];
  // Add other properties if necessary
}

interface Step3Props {
  setCurrStep: React.Dispatch<React.SetStateAction<number>>;
  setStep3Data: React.Dispatch<React.SetStateAction<donationData>>;
  data: donationData;
  step3Data: donationData;
}

const Step3: React.FC<Step3Props> = ({
  setCurrStep,
  setStep3Data,
  step3Data,
}) => {
  const [finalVolume, setFinalVolume] = useState<number>(0);
  const optionData = [
    {
      name: "Clothes",
      qty: 0,
      volume: 5,
    },
    {
      name: "Footwear",
      qty: 0,
      volume: 5,
    },
    {
      name: "Stationery",
      qty: 0,
      volume: 5,
    },
  ];

  function calcVolume() {
    let totalVolume = 0;
    if (step3Data && step3Data.cartItems) {
      step3Data.cartItems.forEach((ele) => {
        totalVolume += ele.volume * ele.qty;
      });
      setFinalVolume(totalVolume);
    }
  }

  useEffect(() => {
    calcVolume();
  }, [step3Data]);

  return (
    <div
      className="flex justify-center items-center flex-col gap-4 p-4"
      style={{ width: "100%" }}
    >
      <h3 style={{ fontSize: "24px" }}>PICK YOUR DONATION ITEMS</h3>
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-4 w-full "
        style={{ width: "100%" }}
      >
        <div className="flex justify-center items-center md:col-span-6 px-6">
          <div
            className="flex justify-center border p-4 flex-col"
            style={{
              width: "100%",
              backgroundColor: "#f6f6f6",
              borderRadius: "6px",
            }}
          >
            <div className="flex flex-col gap-3">
              {step3Data.cartItems.map((item, index: number) => (
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
                  {item.qty == 0 ? (
                    <div
                      className="border flex flex-row justify-center items-center gap-1 bg-white"
                      style={{
                        border: "2px solid red",
                        height: "30px",
                        width: "100px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        const temp = { ...step3Data };
                        temp.cartItems[index].qty = 1;
                        setStep3Data(temp);
                      }}
                    >
                      Add
                    </div>
                  ) : (
                    <div
                      className="border flex flex-row justify-center items-center gap-1 bg-white"
                      style={{
                        border: "2px solid red",
                        height: "30px",
                        width: "100px",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        className="p-1"
                        onClick={() => {
                          const temp = { ...step3Data };
                          temp.cartItems[index].qty =
                            Number(temp.cartItems[index].qty) - 1;
                          setStep3Data(temp);
                        }}
                      >
                        -
                      </div>
                      <input
                        type="text"
                        value={item.qty.toString()}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "50px",
                          height: "100%",
                          border: "none",
                          textAlign: "center",
                        }}
                      />
                      <div
                        className="p-1"
                        onClick={() => {
                          const temp = { ...step3Data };
                          temp.cartItems[index].qty =
                            Number(temp.cartItems[index].qty) + 1;
                          setStep3Data(temp);
                        }}
                      >
                        +
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center md:col-span-6 px-6 flex-col">
          <div className="flex my-6 w-full flex justify-center items-center ">
            <Image src="/bag2.svg" alt="My SVG" width={100} height={100} />
            <div className="flex flex-col">
              <div className="text-3xl font-bold" style={{ color: "#008000" }}>
                {finalVolume}%
              </div>
              <div className=" ">Capacity Used.</div>
            </div>
          </div>

          <div style={{ borderBottom: "1px solid grey", width: "100%" }} />
          <div className="w-full flex justify-start mt-3">NOTE:</div>
          <ul className="list-disc w-full ">
            <li className="text-sm">
              You can choose to leave the donation bag at the door or gate for
              contactless pickup. Please inform the rider for the same when he
              calls.
            </li>
            <li className="text-sm">
              Pickup will be done by a 2-Wheeler Rider assigned by one of our
              partners - Dunzo, Porter or Borzo.
            </li>
            <li className="text-sm">
              Please ensure that the total weight doesn't exceed 10 kgs and the
              volume can be accommodated in a 2-wheeler.
            </li>
            <li className="text-sm">
              Please pack the items in a single bag. Only one bag is accepted
              per request in a two-wheeler but you can raise multiple requests
              for same slot.
            </li>
            <li className="text-sm">
              Please keep the items packed and ready for pickup.
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full flex justify-end px-4">
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
          onClick={() => setCurrStep(4)}
        >
          PROCEED
        </button>
      </div>
    </div>
  );
};

export default Step3;
