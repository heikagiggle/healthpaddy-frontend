import React from "react";
import { CheckIcon } from "../components/icons/green-check";

const MonthlyPlan = () => {
  return (
    <div className=" flex flex-col border border-gray-200 shadow-xl bg-white p-6 rounded-lg h-[892px]">
      <div className="flex flex-col flex-grow">
        <div>
          <h2 className="text-[#0E5A61] bg-[#4FC2CD] bg-opacity-[12%] text-base rounded-2xl py-1 px-2 w-[120px] pl-2.5 font-500">
            Monthly Plan
          </h2>
          <p className="text-[#181818] text-3xl md:text-4xl lg:text-5xl font-semibold mt-5 mb-1">
            N15,000
          </p>
          <p className="text-[#181818] opacity-70 text-sm">Per Month</p>
          <div className="text-left text-sm mt-6">
            <p>Renews automatically</p>
            <p>Cancel anytime</p>
          </div>
          <div className="border-b my-6"></div>
        </div>

        <ul className="mt-6 space-y-2">
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>One month meal plan</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Meal Timetables per month (2)</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Multiple recipes</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>General meal plan guidelines</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Video resource: Best ways to prevent hunger and stay fuller</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Video resource: The most time-efficient meal-prepping tips</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Video resource: Handling your cheat meals like a PRO</p>
          </li>
          <li className="flex items-center gap-x-5">
            <div>
              <CheckIcon className="h-4 w-4" />
            </div>
            <p>Free Bonuses</p>
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

export default MonthlyPlan;
