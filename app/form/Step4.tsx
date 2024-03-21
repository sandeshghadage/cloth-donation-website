import React, { useState, ChangeEvent } from "react";
import { donationData } from "./page";

interface Option {
  isChecked: boolean;
}

interface TimeSlot {
  THURSDAY: string[];
  FRIDAY: string[];
  SATURDAY: string[];
}

interface Step4Props {
  setCurrStep: React.Dispatch<React.SetStateAction<number>>;
  setStep4Data: React.Dispatch<React.SetStateAction<donationData>>;
  data: donationData;
  step4Data: donationData;
  step3Data: donationData;
  step2Data: donationData;
  step1Data: donationData;
}

const Step4: React.FC<Step4Props> = ({
  setCurrStep,
  setStep4Data,
  step4Data,
  step3Data,
  step2Data,
  step1Data,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isSelectedTimeSlot, setSelectedTimeSlot] = useState<{
    day: string;
    time: string;
  } | null>(null);
  const [comment, setComment] = useState<string>("");

  const finalData = {
    ...step1Data,
    ...step2Data,
    ...step3Data,
    ...step4Data,
  };

  const optionData: TimeSlot[] = [
    {
      THURSDAY: [
        "10:00 AM - 12:00 PM",
        "12:00 PM - 02:00 PM",
        "2:00 PM - 04:00 PM",
      ],
      FRIDAY: [
        "10:00 AM - 12:00 PM",
        "12:00 PM - 02:00 PM",
        "2:00 PM - 04:00 PM",
      ],
      SATURDAY: [
        "10:00 AM - 12:00 PM",
        "12:00 PM - 02:00 PM",
        "2:00 PM - 04:00 PM",
      ],
    },
  ];
  console.log(54, step4Data);
  const optionData1 = [
    {
      name: "cloths",
      qty: "2",
    },
    {
      name: "Footware",
      qty: "6",
    },
    {
      name: "stationary",
      qty: "3",
    },
  ];

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setStep4Data((prevData) => ({
      ...prevData,
      note: event.target.value,
    }));
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleData = (day: string, timeSlot: string) => {
    // console.log("Selected time slot:", day, timeSlot);
    setSelectedTimeSlot({ day, time: timeSlot });
  };

  // console.log("date", isSelectedTimeSlot);
  const onSubmit = async () => {
    // console.log(97, finalData);
    // console.log("first");
    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalData),
      });

      const body = await res.json();

      if (res.ok) {
        alert(`${body.message} 🚀`);
      }

      if (res.status === 400) {
        alert(`${body.message} 😢`);
      }
    } catch (err) {
      console.log("Something went wrong: ", err);
    }
  };
  // console.log(comment);
  const handleStep4InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStep4Data((prevData) => ({
      ...prevData,
      userDetails: {
        ...prevData.userDetails,
        [name]: value,
      },
    }));
  };

  return (
    <div
      className="flex flex-col gap-4 w-full px-10"
      // style={{ width: "40%" }}
    >
      <div className=" flex justify-center items-center flex-col w-full my-8 py-4">
        <span className="text-center w-full text-xl">SCHEDULE A PICKUP</span>
        <span className="text-center w-full text-sm">
          Please select a convenient slot as per your availability
        </span>
      </div>
      <div className="w-12/12  flex flex-row flex-wrap justify-between items-center px-8 gap-y-9 max-xl:flex-col max-xl:px-0  ">
        <div className="w-6/12  flex flex-col gap-y-14 max-xl:w-full max-xl:flex-row max-lg:flex-col">
          <div className="w-full flex flex-col justify-center items-left gap-y-6 py-4">
            <h2 className="text-xl">1. Choose a pickup slot</h2>
            <div className="w-full flex flex-col justify-center item-left gap-6">
              {optionData.map((item) => {
                return (
                  <>
                    {Object.entries(item).map(([day, timeSlots]) => {
                      return (
                        <>
                          <span className="text-sm">{day}</span>
                          <div className="flex flex-row justify-between items-center gap-2 max-xl:flex-wrap max-xl:justify-around">
                            {timeSlots.map(
                              (timeSlot: string, timeIndex: number) => (
                                <button
                                  key={timeIndex}
                                  onClick={() => {
                                    handleData(day, timeSlot);
                                    setStep4Data((prevData) => ({
                                      ...prevData,
                                      time: {
                                        day: day,
                                        timeSlot: timeSlot,
                                      },
                                    }));
                                  }}
                                  className={
                                    isSelectedTimeSlot?.day === day &&
                                    isSelectedTimeSlot?.time === timeSlot
                                      ? "border-2 w-48 h-10 rounded-xl bg-orange-500 text-white"
                                      : "border-2 border-gray-500 w-48 h-10 rounded-xl max-xl w-45"
                                  }
                                >
                                  {timeSlot}
                                </button>
                              )
                            )}
                          </div>
                        </>
                      );
                    })}
                  </>
                );
              })}
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-left gap-y-6">
            <h2 className="text-xl">2. NOTES FOR PICKUP PERSON (Optional)</h2>
            <span className="text-sm">
              * We'll do our best to pass along your instructions to our Pickup
              Partner. Compliance isn't guaranteed.
            </span>
            <div className=" border-orange-500 focus:border-blue-500 focus:outline-none">
              <textarea
                className=" border-orange-500 focus:border-blue-500 focus:outline-none p-2 w-full outline-orange-500 outline-offset-1 outline-width-0"
                placeholder="Enter your comments here..."
                rows={4}
                cols={50}
                value={step4Data.note}
                onChange={handleChange}
                // style={{ borderColor: 'orange',outline:"none",outlineColor:"orange",outlineOffset:0 }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="w-6/12  flex flex-col justify-center items-end gap-8 max-xl:w-full max-xl:flex-row max-lg:flex-col max-lg:items-center">
          <div className="w-8/12  flex flex-col justify-center items-center gap-2  rounded-xl shadow-lg shadow-orange-500/50 max-2xl:w-10/12 ">
            <h2 className="py-4 px-6 text-2xl font-normal antialiased ">
              Donar Details
            </h2>
            <div className="w-full  flex flex-col justify-center items-center gap-6">
              <div className="w-10/12 h-10 border-2 border-orange-500 rounded-xl ">
                <input
                  className="w-full h-full px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Name.."
                  name="name"
                  value={step4Data.userDetails.name}
                  onChange={handleStep4InputChange}
                />
              </div>
              <div className="w-10/12 h-10 border-2 border-orange-500 rounded-xl">
                <input
                  className="w-full h-full px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Email"
                  name="email"
                  value={step4Data.userDetails.email}
                  onChange={handleStep4InputChange}
                />
              </div>
              <div className="w-10/12 h-10 border-2 border-orange-500 rounded-xl">
                <input
                  className="w-full h-full px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Mobile No.."
                  name="mobileNumber"
                  value={step4Data.userDetails.mobileNumber}
                  onChange={handleStep4InputChange}
                />
              </div>
              <div className="w-10/12 h-10  flex flex-row justify-center gap-4 rounded-xl">
                <input
                  className="w-5/12 h-full border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Flat/Door"
                  name="flat"
                  value={step4Data.userDetails.flat}
                  onChange={handleStep4InputChange}
                />
                <input
                  className="w-7/12 h-full border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Full Address"
                  name="address"
                  value={step4Data.userDetails.address}
                  onChange={handleStep4InputChange}
                />
              </div>
              <div className="w-10/12 h-10 flex flex-row justify-center gap-4 rounded-xl">
                <input
                  className="w-6/12 h-full border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="City"
                  name="city"
                  value={step4Data.userDetails.city}
                  onChange={handleStep4InputChange}
                />
                <input
                  className="w-6/12 h-full border-2 border-orange-500 px-2 rounded-xl outline-orange-500 outline-offset-1"
                  placeholder="Pincode"
                  name="pincode"
                  value={step4Data.userDetails.pincode}
                  onChange={handleStep4InputChange}
                />
              </div>
              <div className="w-9/12 h-10 mb-1 ">
                {/* <input type="checkbox" className="border-2 rounded border-gray-400 outline-none outline-0"/> */}
                <input
                  type="checkbox"
                  id="terms"
                  className="hidden peer"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="terms"
                  className="inline-block cursor-pointer relative"
                >
                  <span className="relative inline-block w-6 h-6 bg-white border border-gray-400 rounded"></span>
                  <span className="absolute top-1.5 left-1.5 flex items-center justify-center">
                    <svg
                      className={`w-4 h-4 fill-current pointer-events-none ${
                        isChecked ? "block text-orange-500" : "hidden"
                      }`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M6 10.75l-3.5-3.5-2.5 2.5 6 6 12-12-2.5-2.5-9.5 9.5z" />
                    </svg>
                  </span>
                  <span className="ml-3 text-xs">
                    I have read and agree with the Terms of Use.
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="w-8/12 border-2 bg-slate-100 flex flex-col justify-center items-left max-lg:w-10/12">
            <h1 className=" flex items-center py-2 px-6 text-xl">
              Donated Items
            </h1>
            {step3Data && step3Data.cartItems && (
              <>
                {step3Data?.cartItems.map((item) => {
                  return (
                    <div className="border-t-2 flex flex-row justify-between items-center py-2 px-6">
                      <span>{item.name}</span>
                      <span>{item.qty}</span>
                    </div>
                  );
                })}
              </>
            )}

            <div className="border-t-2 flex flex-col justify-between items-left py-2 px-6">
              <div className="flex flex-row justify-between items-center">
                <span className="text-sm">
                  Light Pickup (via 2-Wheeler) - Fee
                </span>
                <span className="text-emerald-500 text-sm">₹199/-</span>
              </div>
              <div className="text-sm">(Incl. all Taxes)</div>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-end gap-x-12 items-right flex-row w-11/12 my-10 ">
        <button className=" px-4 py-2 bg-gray-400 rounded text-white">
          Back
        </button>
        <button
          onClick={onSubmit}
          className=" px-4 py-2 bg-orange-500 rounded text-white"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default Step4;
