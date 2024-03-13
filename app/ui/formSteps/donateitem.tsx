import { useState } from "react";

export default function Donateitem() {
  const [item, setitem] = useState();
  const [itemQty, setItemQty] = useState(1);

  const handelIncrement = () => {
    "test delte me";
  };

  const handelDecrement = () => {};

  return (
    <>
      <h1 className="text-2xl text-center">DONATION ITEMS</h1>
      <p className="text-xm">DONATION ITEMS</p>
      <div className="flex items-center border bg-slate-400 border-blue-600">
        <button
          onClick={handelIncrement}
          className="bg-blue-600 p-1 rounded px-1"
        >
          +
        </button>
        <div>1</div>
        <button
          onClick={handelDecrement}
          className="bg-blue-600 p-1 rounded px-1"
        >
          -
        </button>
      </div>
    </>
  );
}
