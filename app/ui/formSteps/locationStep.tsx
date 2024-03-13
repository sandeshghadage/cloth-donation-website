"use client";
import { TextInput, Button } from "flowbite-react";
import Link from "next/link";

export default function LocationStep() {
  return (
    <div className="flex flex-col gap-3 items-center border">
      <h1 className="text-2xl">HELP US WITH YOUR EXACT LOCATION</h1>
      <p>
        This allows us to check if your area is
        <p className="mx-auto">within our coverage</p>
      </p>
      <div className="flex gap-2 ">
        <TextInput placeholder="Enter your address.." />
        <Button>SEARCH</Button>
      </div>
      <Link href="#">Auto-Detect Location</Link>
    </div>
  );
}
