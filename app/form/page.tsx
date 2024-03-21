"use client";
import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step4 from "./Step4";
import Step3 from "./Step3";
import { pages } from "next/dist/build/templates/app-page";

interface Step1FormData {
  location: string;
}

interface Step2FormData {
  vehicalType: string;
}

interface Step3FormData {
  cartItems: [
    {
      name: string;
      qty: number;
      volume: number;
    },
    {
      name: string;
      qty: number;
      volume: number;
    },
    {
      name: string;
      qty: number;
      volume: number;
    }
  ];
}
interface Step4FormData {
  userDetails: {
    name: string;
    email: string;
    mobileNumber: string;
    address: string;
    city: string;
    pincode: string;
    flat: string;
  };
  note: string;
  time: object;
}

interface MultiStepFormProps {
  onSubmit: (data: donationData) => void;
}

export interface donationData {
  location: string;
  vehicalType: string;
  cartItems: [];
  time: object;
  userDetails: {
    name: string;
    email: string;
    mobileNumber: string;
    address: string;
    city: string;
    pincode: string;
    flat: string;
  };
  note: string;
}

const Form = () => {
  const [currStep, setCurrStep] = useState<number>(1);
  const [step1Data, setStep1Data] = useState<Step1FormData>({
    location: "",
  });
  const [step2Data, setStep2Data] = useState<Step2FormData>({
    vehicalType: "",
  });
  const [step3Data, setStep3Data] = useState<Step3FormData>({
    cartItems: [
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
    ],
  });
  const [step4Data, setStep4Data] = useState<Step4FormData>({
    userDetails: {
      name: "",
      email: "",
      mobileNumber: "",
      flat: "",
      address: "",
      city: "",
      pincode: "",
    },
    note: "",
    time: {},
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData: donationData = {
      location: step1Data.location,
      vehicalType: step2Data.vehicalType,
      cartItems: step3Data.cartItems,
      time: step3Data.time,
      userDetails: step3Data.userDetails,
      note: step3Data.note,
    };
    // onSubmit(formData);
  };
  console.log(114, step4Data);
  const nextStep = () => {
    setCurrStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrStep((prevStep) => prevStep - 1);
  };

  const handleStep1InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStep1Data((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStep2InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStep2Data((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleStep3InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStep3Data((prevData) => ({
      ...prevData,
      userDetails: {
        ...prevData.userDetails,
        [name]: value,
      },
    }));
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setStep3Data((prevData) => ({
      ...prevData,
      note: value,
    }));
  };
  console.log(175, currStep);
  return (
    <div className="border p-6 flex justify-center ">
      <div
        className="bg-white container flex justify-center items-center flex-col rounded"
        style={{ height: "100%" }}
      >
        {currStep === 1 && (
          <Step1
            setCurrStep={setCurrStep}
            setStep1Data={setStep1Data}
            step1Data={step1Data}
          />
        )}
        {currStep === 2 && (
          <Step2
            setCurrStep={setCurrStep}
            setStep2Data={setStep2Data}
            step2Data={step2Data}
          />
        )}
        {currStep === 3 && (
          <Step3
            setCurrStep={setCurrStep}
            setStep3Data={setStep3Data}
            step3Data={step3Data}
          />
        )}
        {currStep === 4 && (
          <Step4
            setCurrStep={setCurrStep}
            setStep4Data={setStep4Data}
            step4Data={step4Data}
            step3Data={step3Data}
            step2Data={step2Data}
            step1Data={step1Data}
          />
        )}
      </div>
    </div>
  );
};

export default Form;
