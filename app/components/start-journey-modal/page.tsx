"use client";
import { DefaultModal } from "../modal/DefaultModal";
import React, { useState } from "react";
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

interface Props {
  trigger: React.ReactNode;
}

const StartJourneyModal = ({ trigger }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCondition, setSelectedCondition] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const totalSteps = 10;

  const calculateProgress = () => {
    if (currentStep === 1) return 0;
    return ((currentStep - 1) / (totalSteps - 1)) * 100;
  };

  const handleConditionSelect = (condition: string) => {
    setSelectedCondition(condition);

    if (condition === "None") {
      setCurrentStep(10);
    } else {
      handleNextStep();
    }
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
      <div className="mt-1 pr5 px-1">
        {currentStep === 1 && (
          <StartJourney
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 2 && (
          <PersonalInfo
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 3 && (
          <Goals onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
        )}
        {currentStep === 4 && (
          <Great onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
        )}
        {currentStep === 5 && (
          <BodyInfo onNextStep={handleNextStep} onPrevStep={handlePrevStep} />
        )}
        {currentStep === 6 && (
          <TargetWeight
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 7 && (
          <TargetMonth
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 8 && (
          <PhysicallyActive
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
          />
        )}
        {currentStep === 9 && (
          <HealthConditions
            onNextStep={handleNextStep}
            onPrevStep={handlePrevStep}
            handleConditionSelect={handleConditionSelect}
          />
        )}
        {currentStep === 10 &&
          (selectedCondition === "none" ? (
            <CongratulationsOne onPrevStep={handlePrevStep} />
          ) : (
            <CongratulationsTwo
              onPrevStep={handlePrevStep}
              selectedCondition={selectedCondition}
            />
          ))}
      </div>
    </DefaultModal>
  );
};

export default StartJourneyModal;
