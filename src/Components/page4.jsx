import React, { use, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
const Page4 = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full   mx-auto flex justify-between p-3 items-center flex-wrap">
        <h1 className="font-bold text-2xl">FoodGo*</h1>
        <div className=" items-center gap-12 flex ">
          <div className="hidden md:block md:flex gap-3 ">
            <h1>our Product</h1>
            <h1>Services</h1>
            <h1>Pricing</h1>
            <h1>clients</h1>
          </div>

          <div className="w-30 h-10 flex items-center p-2 border rounded-2xl bg-black">
            <h1 className="text-white">Get the card</h1>
          </div>
        </div>
      </div>
      <button onClick={() => setOpen(!open)}>
        <CiMenuBurger className="block md:hidden mr-4" />
      </button>
      <div
        className={`${open ? "block" : "hidden"} block md:hidden  md:flex-col gap-5 `}
      >
        <h1>our Product</h1>
        <h1>Services</h1>
        <h1>Pricing</h1>
        <h1>clients</h1>
      </div>
    </div>
  );
};

export default Page4;
