import Link from "next/link";
import { Checkbox, Label } from "flowbite-react";

export default function HowStep() {
  return (
    <>
      <div className="flex flex-col gap-2 items-center">
        <h1 className="text-2xl">HOW DO YOU WISH TO DONATE?</h1>
        <p className="flex flex-col pb-3 items-center">
          Options shown as per your location:
          <br />
          <em>Loehiya. Hospital, Bholepur, Fatehgarh, Uttar Pradesh, India</em>
          <br />
          <Link href="#">(Change location?)</Link>
        </p>
      </div>

      <div className="flex max-w-md flex-col gap-4" id="checkbox">
        <div className="flex items-center gap-2">
          <Checkbox id="accept" defaultChecked />
          <Label htmlFor="accept" className="flex">
            I agree with the&nbsp;
            <a
              href="#"
              className="text-cyan-600 hover:underline dark:text-cyan-500"
            >
              terms and conditions
            </a>
          </Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="promotion" />
          <Label htmlFor="promotion">I want to get promotional offers</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="age" />
          <Label htmlFor="age">I am 18 years or older</Label>
        </div>
        <div className="flex gap-2">
          <div className="flex h-5 items-center">
            <Checkbox id="shipping" />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="shipping">Free shipping via Flowbite</Label>
            <div className="text-gray-500 dark:text-gray-300">
              <span className="text-xs font-normal">
                For orders shipped from Flowbite from{" "}
                <span className="font-medium">€ 25</span> in books or&nbsp;
                <span>€ 29</span> on other categories
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="disabled" disabled />
          <Label htmlFor="disabled" disabled>
            Eligible for international shipping (disabled)
          </Label>
        </div>
      </div>
    </>
  );
}
