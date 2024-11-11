import Image from "next/image";
import Link from "next/link";
import React from "react";
import StartJourneyModal from "../../components/start-journey-modal/page";

export default function CtaCalorieCal() {
  return (
    <section className="border-b-2 border-white">
      <div
        className="bg-[#0E5A61] flex flex-col-reverse md:flex-row md:gap-y-0 justify-between items-center gap-x-20 gap-y-16
         pb-8 pt-10 px-20 sm:px-[0] md:px-16 xl:px-24 relative overflow-hidden"
      >
        <div className="w-full sm:w-1/2 relative">
          <Image
            src="https://files.skillpaddy.com/public/image/calculator-1727340285969.png"
            alt="calculator-image"
            width={800}
            height={800}
            className="relative -mb-20"
          />
        </div>
        <div className="flex flex-col gap-y-4 sm:w-1/2 z-10">
          <h3 className="text-3xl md:text-4xl lg:text-[50px] lg:leading-[60px] 2xl:text-[68px] font-[700] mb-4 text-white">
            Calorie Calculator
          </h3>
          <p className="text-left text-white mb-3 text-sm xl:text-lg leading-[22px] lg:leading-[24px]">
            Use our calorie calculator to determine how many calories you need
            and get a complimentary meal plan
          </p>
          <StartJourneyModal
            trigger={
              <button className="px-5 py-2.5 bg-white text-[#0E5A61] text-sm md:text-base xl:text-lg rounded-full hover:opacity-90 transition-opacity duration-300">
                Take your personalized quiz
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
}
