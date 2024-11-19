import { ContainerProps } from "../../utils/type";
import { Button } from "../Button/Button";
import Link from "next/link";
import { HealthConditionResponse } from "../../hooks/start-journey/type";

interface CongratulationsTwoProps extends ContainerProps {
  selectedCondition: string;
  data: HealthConditionResponse | null;
}

const CongratulationsTwo = ({ onPrevStep, selectedCondition, data }: CongratulationsTwoProps) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center w-[18rem] shadow-lg p-3">
          <h1 className="text-center text-[#43A5AE] border-b border-[#F9F9F9] pb-1">
            Calorie Summary
          </h1>
          {!data ? (
            <p className="text-center text-gray-500">Loading summary...</p> 
          ) : (
            <div className="flex justify-between items-center py-2">
              <ul className="text-[#979797] text-sm flex flex-col gap-y-2">
                <li>Weight Goal</li>
                <li>Calorie Need</li>
                <li>Body Mass Index</li>
                <li>Target Weight</li>
                <li>Duration</li>
                <li>Health Conditions</li>
              </ul>
              <ul className="font-semibold text-sm flex flex-col gap-y-2">
                <li className="text-[#43A5AE]">{data.data.goal}</li>
                <li>{data.data.requiredCalorie} cal</li>
                <li>
                  {data.data.bmi} ({data.data.bmiDescription})
                </li>
                <li>{data.data.targetWeight} kg</li>
                <li>{data.data.durationInMonth} Months</li>
                <li>{selectedCondition.replace("_", " ")}</li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="text-[#181818] text-center flex flex-col gap-y-2">
        <h3 className="sm:text-lg lg:text-2xl mt-2 text-base font-semibold leading-snug">
          Congratulations, We’ve successfully calculated your calorie target!
        </h3>

        <p className="text-sm font-medium md:py-2 py-1">
          Given your {selectedCondition.replace("_", " ")}, your plan will need
          to be fully customized to you. Once you subscribe to the customized
          plan, we’ll send a link to a form in your email where you can provide
          your health data and food preferences for a tailored meal plan.
        </p>
      </div>

      <div className="flex justify-between items-center border-t border-[#0000004D] md:mt-6 mt-2 pt-4 px-0 mb-1">
        <Button
          className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
          onClick={onPrevStep}
        >
          Back
        </Button>
        <Link href="/price">
          <Button>Proceed</Button>
        </Link>
      </div>
    </div>
  );
};

export default CongratulationsTwo;
