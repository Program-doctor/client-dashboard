import React from "react";
import "./onboarding.css";

function Onboarding() {
  return (
    <div>
    <div className="w-[1440px] h-[1024px] pb-[189px] bg-white flex-col justify-start items-center gap-[89px] inline-flex">
  <div className="self-stretch h-[100px] pl-16 pr-[1100px] py-[21px] bg-white shadow justify-start items-center inline-flex">
    <div className="w-[276px] self-stretch px-[30px] py-5 rounded-[5px] border border-lime-500 justify-center items-center gap-2.5 inline-flex">
      <div className="text-lime-500 text-[19px] font-medium font-['Poppins']">Go back to Dashboard</div>
    </div>
  </div>
  <div className="w-[764px] h-[646px] relative">
    <div className="w-[750px] h-72 left-[6px] top-[176px] absolute flex-col justify-center items-start gap-10 inline-flex">
      <div className="self-stretch flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="justify-end items-center gap-[505px] inline-flex">
          <div className="text-stone-300 text-[22px] font-normal font-['Poppins']">Amount Of Camera</div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="text-stone-300 text-[22px] font-normal font-['Poppins']">IP address(Camera 1)</div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="text-stone-300 text-[22px] font-normal font-['Poppins']">IP address(Camera2)</div>
      </div>
      <div className="self-stretch flex-col justify-start items-start gap-[9px] inline-flex">
        <div className="text-stone-300 text-[22px] font-normal font-['Poppins']">IP address(Camera3)</div>
      </div>
    </div>
    <div className="w-[764px] h-[87px] left-0 top-0 absolute justify-center items-center gap-16 inline-flex">
      <div className="justify-center items-center gap-2 flex">
        <div className="flex-col justify-center items-start gap-4 inline-flex">
          <div className="text-zinc-900 text-5xl font-medium font-['Inter']">Set Up  Camera</div>
          <div className="w-[83px] h-[13px] bg-lime-500" />
        </div>
      </div>
      <div className="justify-center items-center gap-6 flex">
        <div className="text-stone-300 text-4xl font-normal font-['Poppins']">Set Up animal type</div>
      </div>
    </div>
    <div className="w-[97px] h-[58px] px-[30px] py-5 left-[333px] top-[588px] absolute bg-lime-500 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
      <div className="text-white text-[19px] font-medium font-['Poppins']">Link</div>
    </div>
  </div>
</div>
    </div>
  );
}

export default Onboarding;
