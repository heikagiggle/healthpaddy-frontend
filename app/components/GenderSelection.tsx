import { useState } from "react";
import { FaMars, FaVenus } from "react-icons/fa";

interface Props {
  handler: any;
}
export const GenderSelection = ({ handler }: Props) => {
  const [selectedGender, setSelectedGender] = useState<string | null>(null);

  const handleGenderSelect = (gender: string) => {
    setSelectedGender(gender);
    handler.setValue("gender", gender);
  };

  return (
    <div className="flex flex-col">
      <label htmlFor="Gender" className="text-sm font-medium">Gender</label>
      <div className="flex gap-4 py-1">
        {/* Male Option */}
        <div
          className={`flex flex-col items-center w-1/2 p-2 cursor-pointer rounded-lg ${
            selectedGender === "male"
              ? "border-2 border-blue-500 bg-blue-50"
              : "border"
          }`}
          onClick={() => handleGenderSelect("male")}
        >
          <FaMars className="h-8 w-8 text-blue-500" />
          <span className="text-sm mt-1">Male</span>
        </div>

        {/* Female Option */}
        <div
          className={`flex flex-col items-center w-1/2 p-2 cursor-pointer rounded-lg ${
            selectedGender === "female"
              ? "border-2 border-pink-500 bg-pink-50"
              : "border"
          }`}
          onClick={() => handleGenderSelect("female")}
        >
          <FaVenus className="h-8 w-8 text-pink-500" />
          <span className="text-sm mt-1">Female</span>
        </div>
      </div>
    </div>
  );
};
