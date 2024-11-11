import { ContainerProps } from "../../utils/type";
import { Button } from "../widget/Button";
import Image from "next/image";

const StartJourney = ({ onNextStep }: ContainerProps) => {
  return (
    <div className="flex flex-col h-full gap-y-4">
      <div className="flex justify-center">
        <Image
          src={
            "https://files.skillpaddy.com/public/image/start-journey-1728388572652.png"
          }
          alt="congrats"
          width={200}
          height={200}
        />
      </div>
      <div className="m text-[#181818] text-center md:px-24">
        <h3 className="md:text-2xl text-xl font-semibold leading-snug">
          Let’s quickly figure out your daily calorie needs!
        </h3>

        <p className="text-sm my-2 font-medium">
          it’ll only take a minute to fill out everything we need
        </p>
      </div>

      <div className="flex justify-between items-center border-t border-[#0000004D] mt-10 pt-4 px-0">
        <Button
          className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
          disabled
        >
          Back
        </Button>
        <Button onClick={onNextStep}>Next</Button>
      </div>
    </div>
  );
};

export default StartJourney;
