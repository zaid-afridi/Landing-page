import React, { useState } from "react";

const Page2 = () => {
  // const [count, setCount] = useState(1);
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full mx-auto h-120 bg-black border-gray-300 flex  flex-col gap-5 border items-center p-15  shadow-2xl">
        <h1 className="text-5xl text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsum
          quidem molestias.
        </h1>
        {/* <button
          onClick={() => setCount(count + 1)}
          className="bg-gray-500 text-2xl w-90 p-3 text-white"
        >
          click
        </button>
        <p className="text-white">{count}</p> */}
      </div>
    </div>
  );
};

export default Page2;
