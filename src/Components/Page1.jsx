import React from "react";

const Page1 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full mx-auto border-gray-300 flex  flex-col gap-8 border items-center p-10 justify-center shadow-2xl">
        <div className="flex gap-2 items-center">
          <img
            className="w-16 h-16 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/06/04/23/47/rufus-8041082_1280.jpg"
            alt=""
          />
          <h3 className="text-xl font-semibold">
            Adam Moucka in User Interface
          </h3>
        </div>
        <h1 className="text-5xl font-bold">Practice Landing Page Design</h1>
        <p className="text-2xl">
          Modify assets, sharpen your gradients, and more
        </p>
      </div>
    </div>
  );
};

export default Page1;
