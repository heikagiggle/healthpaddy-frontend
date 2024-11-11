import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { TextInput } from "../form/text-input";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { DateField } from "../widget/date-field";

const BodyInfoSchema = z.object({
  gender: z.string().min(1, { message: "gender is required" }),
  date: z.string().min(1, { message: "date is required" }),
  height: z.string().min(1, { message: "height is required" }),
  weight: z.string().min(1, { message: "weight is required" }),
});

export type BodyInfoData = z.infer<typeof BodyInfoSchema>;

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
          Now lets get to know you a bit better, so we can make sure your meal
          plans are tailored just for you
        </h1>
        <div className={"flex flex-col gap-3 mb-20 mt-2"}>
          <div className="py-1">
            <DateField
              name={"date"}
              label={"Date of birth"}
              placeholder={"yyyy/mm/dd"}
            />
          </div>

          <div className="py-1">
            <TextInput
              name={"gender"}
              label={"Gender"}
              placeholder={"male/female"}
            />
          </div>

          <div className="py-1">
            <label htmlFor="" className="text-sm">
              Height
            </label>
            <div className=" flex gap-x-3">
              <TextInput name={"height"} label={""} rightLabel={"ft"} />
              <TextInput name={"height"} label={""} rightLabel={"in"} />
            </div>
          </div>
          <div className="py-1">
            <TextInput name={"weight"} label={"Weight"} rightLabel={"kg"} />
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
