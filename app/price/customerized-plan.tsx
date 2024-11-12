import React from "react";
import { CheckIcon } from "../components/icons/green-check";

const CustomizedPlan = () => {
  return (
    <div className="flex flex-col border border-gray-200 shadow-lg bg-white p-6 rounded-lg h-[892px]">
      <div className="flex flex-col flex-grow">
        <div>
          <h2 className="text-[#0E5A61] bg-[#4FC2CD] bg-opacity-[12%] text-base rounded-2xl py-1 px-2 w-[145px] pl-2.5 font-500">
            Customized Plan
          </h2>
          <p className="text-[#181818] text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 mb-1">
            N30,000
          </p>
          <p className="text-[#181818] opacity-70 text-sm">Per Month</p>
          <div className="text-left text-sm mt-6">
            <p>For Specific Health Conditions</p>
            <p>Cancel anytime</p>
          </div>
          <div className="border-b my-6"></div>
        </div>

        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Numerous meal options, designed based on your fitness goals</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>A timetable that follows your preferred eating pattern</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p> Details of specific portions and RECIPES.</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Ad-free experience</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p> A New timetable every 2 weeks for more variety</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Nutritionally balanced meal options rich in nutrients</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Calorie-specific plan to ensure results</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Guidelines on when best to eat</p>
          </li>
        </ul>
      </div>

      <div className="flex flex-col mt-auto">
        <button className=" p-4 text-white w-full bg-[#0E5A61] text-base rounded-[68px] hover:opacity-80 transition-opacity duration-300">
          Continue with purchase
        </button>
      </div>
    </div>
  );
};

export default CustomizedPlan;
