import { ContainerProps } from "../../utils/type";
import { Button } from "../Button/Button";
import Image from "next/image";

const Great = ({ onNextStep, onPrevStep }: ContainerProps) => {
  return (
    <div className="flex flex-col gap-y-6">
      <div className=" text-[#181818]">
        <h3 className="md:text-2xl text-lg font-bold text-[#181818]">
          Great, You’ve just taken a big step on your journey
        </h3>

        <p className=" my-4 font-medium">
          You’ve made an empowering choice by selecting the Lose Weight option!
          Our meal plans are here to support you on your weight loss journey,
          guiding you towards a healthier, more vibrant you
        </p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-x-4  rounded-xl">
          <Image
            src={
              "https://files.skillpaddy.com/public/image/great-1728652095369.png"
            }
            width={150}
            height={200}
            alt="great"
            className=""
          />
        </div>
      </div>

      <div className="flex justify-between items-center border-t border-[#0000004D] pt-4 px-0 mb-2">
        <Button
          className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
          onClick={onPrevStep}
        >
          Back
        </Button>
        <Button onClick={onNextStep}>Next</Button>
      </div>
    </div>
  );
};

export default Great;
