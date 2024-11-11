import { ClockIcon } from "../../components/icons/clock-icon";
import { GoalIcon } from "../../components/icons/goal-icon";
import { LocationIcon } from "../../components/icons/location-icon";
import { PlanIcon } from "../../components/icons/plan-icon";
import React from "react";

export default function Chop() {
  return (
    <section className="bg-[#0E5A61] py-20 px-6 sm:px-10 lg:px-20">
      <div>
        <h3 className="text-center text-3xl md:text-4xl lg:text-[50px] 2xl:text-[64px] font-[600] mb-4 text-white pt-8">
          C.H.O.P
        </h3>
      </div>

      <div
        className="flex flex-col gap-y-8 md:gap-y-8 lg:flex-row justify-between items-center gap-x-6 bg-[#DCE9F4] 
        text-[#43A5AE] font-[600] text-sm md:text-base xl:text-2xl py-6 mx-16 md:mx-32 lg:mx-0 px-8 my-16 rounded-[46px]"
      >
        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-2 justify-between items-center">
          <div>
            <GoalIcon className="w-16 h-16 lg:w-24 lg:h-24" />
          </div>
          <div>
            <p>Choose your goal</p>
          </div>
          <div className="hidden lg:block w-[4px] bg-[#CFCFCF] h-16"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-2 justify-between items-center">
          <div>
            <LocationIcon className="w-16 h-16 lg:w-24 lg:h-24" />
          </div>
          <div>
            <p>Help us know you</p>
          </div>
          <div className="hidden lg:block w-[5px] bg-[#CFCFCF] h-16"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-2 justify-between items-center">
          <div>
            <ClockIcon className="w-16 h-16 lg:w-24 lg:h-24" />
          </div>
          <div>
            <p>Outline your calories</p>
          </div>
          <div className="hidden lg:block w-[5px] bg-[#CFCFCF] h-16"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-y-4 gap-x-2 justify-between items-center">
          <div className="lg:pt-10">
            <PlanIcon className="w-24 h-24 lg:w-40 lg:h-40" />
          </div>
          <div>
            <p>Plan and prepare</p>
          </div>
        </div>
      </div>

      <div className="text-center italic text-white font-[500] text-xl md:text-2xl xl:text-3xl">
        <p>Chop Life the Healthy Way</p>
      </div>
    </section>
  );
}
