import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { TextInput } from "../form/text-input";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { SelectInput } from "../form/select-input"; 
import {GenderSelection} from './../GenderSelection';
import { useState } from "react";

const BodyInfoSchema = z.object({
  gender: z.string().min(1, { message: "gender is required" }),
  date: z.object({
    day: z.string().min(1, { message: "Day is required" }),
    month: z.string().min(1, { message: "Month is required" }),
    year: z.string().min(1, { message: "Year is required" }),
  }),
  heightFt: z.string().min(1, { message: "height is required" }),
  heightIn: z.string().min(1, { message: "height is required" }),
  weight: z.string().min(1, { message: "weight is required" }),
});

export type BodyInfoData = z.infer<typeof BodyInfoSchema>;

// Helper to generate days, months, and years
const generateDays = () =>
  Array.from({ length: 31 }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
    keywords: [(i + 1).toString()],
  }));

const generateMonths = [
  { label: "January", value: "1", keywords: ["january", "1", "jan"] },
  { label: "February", value: "2", keywords: ["february", "2", "feb"] },
  { label: "March", value: "3", keywords: ["march", "3", "mar"] },
  { label: "April", value: "4", keywords: ["april", "4", "apr"] },
  { label: "May", value: "5", keywords: ["may", "5"] },
  { label: "June", value: "6", keywords: ["june", "6", "jun"] },
  { label: "July", value: "7", keywords: ["july", "7", "jul"] },
  { label: "August", value: "8", keywords: ["august", "8", "aug"] },
  { label: "September", value: "9", keywords: ["september", "9", "sep"] },
  { label: "October", value: "10", keywords: ["october", "10", "oct"] },
  { label: "November", value: "11", keywords: ["november", "11", "nov"] },
  { label: "December", value: "12", keywords: ["december", "12", "dec"] },
];

const generateYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 82 }, (_, i) => ({
    label: (currentYear - i - 18).toString(),
    value: (currentYear - i - 18).toString(),
    keywords: [(currentYear - i - 18).toString()],
  }));
};

const BodyInfo = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const handler = useForm<BodyInfoData>({
    resolver: zodResolver(BodyInfoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: BodyInfoData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)}>
        <h1 className="font-medium">
          Now let&apos;s get to know you a bit better, so we can make sure your meal
          plans are tailored just for you
        </h1>
        <div className={"flex flex-col gap-3 mb-20 mt-2"}>
          {/* Date of Birth Select */}
          <div className="py-1">
            <label className="block text-sm font-medium text-gray-700">
              Date of birth
            </label>
            <div className="flex sm:space-x-4 space-x-2 mt-2">
              {/* Day */}
              <SelectInput
                name="date.day"
                label="Day"
                placeholder="Select Day"
                items={generateDays()}
                className="w-[30%] sm:w-full"
              />
              {/* Month */}
              <SelectInput
                name="date.month"
                label="Month"
                placeholder="Select Month"
                items={generateMonths}
                className="w-[30%] sm:w-full"
              />
              {/* Year */}
              <SelectInput
                name="date.year"
                label="Year"
                placeholder="Select Year"
                items={generateYears()}
                className="w-[30%] sm:w-full"
              />
            </div>
          </div>

          <GenderSelection handler={handler}/>

          <div className="py-1">
            <label htmlFor="" className="text-sm">
              Height
            </label>
            <div className="flex gap-x-3">
              <TextInput name="heightFt" type={"number"} label="" rightLabel="ft" />
              <TextInput name="heightIn" type={"number"} label="" rightLabel="in" />
            </div>
          </div>

          <div className="py-1">
            <TextInput name="weight" type="number" label="Weight" rightLabel="kg" className="w-1/2 sm:w-[250px]" />
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#0000004D] pt-4 px-0 mb-2">
          <SubmitButton
            className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
            onClick={onPrevStep}
          >
            Back
          </SubmitButton>
          <SubmitButton onClick={onNextStep}>Next</SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default BodyInfo;
