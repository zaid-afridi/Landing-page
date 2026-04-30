import React from "react";

const Page8 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full mx-auto  border-gray-300 flex flex-wrap  bg-black gap-8 border items-center p-10 justify-center shadow-2xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-white">Books</h1>
          <p className=" text-white">No BS Guide to UX</p>
          <p className=" text-white">Designing USer interface </p>
          <p className=" text-white">ducking Deisgner guide to Ui</p>
          <p className=" text-white">Ui design style </p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-white">Courses </h1>
          <p className=" text-white">mObile App UI 1</p>
          <p className=" text-white">Web design -Landing pages </p>
          <p className=" text-white">Web design-Web Pages</p>
          <p className=" text-white">The boring UI course</p>
          {/* <p className=" text-white">see all</p> */}
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-white">Challenges</h1>
          <p className=" text-white">Deily UI 90 days </p>
          <p className=" text-white">Graphic design</p>
          <p className=" text-white">Information Architecture</p>
          <p className=" text-white">ican design</p>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-white">SquarePlant </h1>
          <p className=" text-white">Terms & Privacy </p>
          <p className=" text-white">Refoud Policy </p>
          <p className=" text-white">FAQ</p>
          <p className=" text-white"> Partners </p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
