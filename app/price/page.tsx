import React from "react";
import MonthlyPlan from "./monthly-plan";
import QuarterlyPlan from "./quarterly-plan";
import CustomizedPlan from "./customerized-plan";

const Price = () => {
  return (
    <section id="pricing" className="mt-20 mb-12">
      {/* Section Heading */}
      <div className="text-center mb-8">
        <h1 className="text-2xl md:text-[38px] font-semibold md:leading-[45px] leading-[25px] px-10 md:mx-40 lg:mx-72">
          Choose a plan <br /> that fits your budget
        </h1>
        <p className="text-sm md:text-base text-[#000000] opacity-70 mt-4 px-20 md:mx-40 lg:mx-80">
          Explore and contrast some of the distinctive deals offered by
          HealthPaddy that you won’t find anywhere else.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 px-10 md:px-16">
        <MonthlyPlan />
        <QuarterlyPlan />
        <CustomizedPlan />
      </div>
    </section>
  );
};

export default Price;
