"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { DefaultModal } from "../modal/DefaultModal";
import StartJourney from "./StartJourney";
import PersonalInfo from "./PersonalInfo";
import Goals from "./Goals";
import Great from "./Great";
import BodyInfo from "./BodyInfo";
import TargetWeight from "./TargetWeight";
import TargetMonth from "./TargetMonth";
import PhysicallyActive from "./PhysicallyActive";
import HealthConditions from "./HealthConditions";
import CongratulationsOne from "./CongratulationsOne";
import CongratulationsTwo from "./CongratulationsTwo";
import { HealthConditionResponse } from "@/app/hooks/start-journey/type";

interface Props {
  trigger: React.ReactNode;
}

const StartJourneyModalSteps = ({ trigger }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<HealthConditionResponse | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const step = searchParams.get("step") ?? "1";
  const currentStep = parseInt(step);

  const [selectedCondition, setSelectedCondition] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

   const handleNextStep = () => {
    if (currentStep < totalSteps) {
      router.push(`?step=${currentStep + 1}`);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      router.push(`?step=${currentStep - 1}`);
    }
  };

  const handleConditionSelect = (condition: string) => {
    setSelectedCondition(condition);
    if (condition === "None") {
      router.push("?step=10");
    } else {
      handleNextStep();
    }
  };

  const totalSteps = 10;
  const calculateProgress = () => {
    if (currentStep === 1) return 0;
    return ((currentStep - 1) / (totalSteps - 1)) * 100;
  };

  return (
    <DefaultModal
      heading={"Calorie Calculator"}
      description={""}
      trigger={<div onClick={handleOpen}>{trigger}</div>}
      progressBar={
        <div className="relative w-full h-1 bg-gray-200">
          <div
            className="absolute h-full bg-[#328B93]"
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      }
      open={open}
      onOpenChange={setOpen}
    >
      {/* Modal content */}
      <div className="mt-1 px-1">
        {step === "1" && (
          <StartJourney
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "2" && (
          <PersonalInfo
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "3" && (
          <Goals
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "4" && (
          <Great onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
        )}
        {step === "5" && (
          <BodyInfo
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "6" && (
          <TargetWeight
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "7" && (
          <TargetMonth
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "8" && (
          <PhysicallyActive
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {step === "9" && (
          <HealthConditions
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            handleConditionSelect={handleConditionSelect}
          />
        )}
        {step === "10" &&
          (selectedCondition === "none" ? (
            <CongratulationsOne onPrevStep={handlePrevStep}  data={data}  />
          ) : (
            <CongratulationsTwo
              onPrevStep={handlePrevStep}
              selectedCondition={selectedCondition}
              data={data} 
            />
          ))}
      </div>
    </DefaultModal>
  );
};

export default StartJourneyModalSteps;
