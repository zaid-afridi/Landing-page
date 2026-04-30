import React from "react";

const Page7 = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-4xl w-full  mx-auto flex flex-col gap-10 lg:flex-row  justify-between bg-green-200 p-3 items-center  lg:mt-12">
        <div className="w-20 h-20 rounded-full">
          <img
            src="https://static.vecteezy.com/system/resources/previews/011/675/374/original/man-avatar-image-for-profile-png.png"
            alt=""
          />
        </div>
        <div className="w-90 flex flex-col gap-5 mt-">
          <h1 className="font-bold text-2xl ">Hello, become a PRO</h1>
          <p>
            For just $10/month you can get guided challenges and AI design
            feedback, your individual -40% promo code on all courses, premium
            articles, videos and invitation to exclusive events.
          </p>
          <h1 className="font-bold">
            ❗️ Prices will increase soon due to high demand - order now to
            secure the current prices
          </h1>
        </div>
        <div className="w-60 h-10 flex items-center p-2 border  bg-green-400">
          <h1>I want to become PRO!</h1>
        </div>
      </div>
    </div>
  );
};

export default Page7;
