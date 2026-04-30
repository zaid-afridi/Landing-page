import React from "react";

const Page5 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full mx-auto flex flex-col lg:flex-row  gap-8  items-center p-10 justify-center ">
        <div className="flex flex-col gap-5">
          <p className="text-gray-500">Foor Food LOvers</p>
          <h1 className="font-bold text-4xl">
            Yor Favouite recipes & Shopping lists in one Place
          </h1>
          <p className="text-xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            magnam!
          </p>
          <div className="flex gap-5">
            <div className="w-30 h-10 flex items-center p-2 border rounded-2xl">
              <button>Whats we do?</button>
            </div>
            <div className="w-30 h-10 flex items-center p-2 border rounded-2xl bg-black">
              <button className="text-white">Get the app </button>
            </div>
          </div>
        </div>
        <div className="w-150 ">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.isbSKYqkvyN_x4bv9zMofgHaE7?pid=Api&P=0&h=220"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Page5;
