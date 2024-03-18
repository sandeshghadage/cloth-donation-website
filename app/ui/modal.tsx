"use client";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import useMultiStepForm from "../customHooks/useMultiStepForm";
import WelcomeStep from "./formSteps/locationStep";
import HowStep from "./formSteps/howStep";
import DonationForm from "./formSteps/donateitem";
import Link from "next/link";

const FlowByteModal: React.FC = () => {
  // const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Link href="/form">Schedule Pickup</Link>
    </>
  );
};
export default FlowByteModal;
