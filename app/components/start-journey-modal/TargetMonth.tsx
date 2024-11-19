import { ContainerProps } from "../../utils/type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { TextInput } from "../form/text-input";
import { SubmitButton } from "../form/SubmitButton";
import { useGoalDuration } from "../../hooks/start-journey/GoalDuration";
import toast from "react-hot-toast";

const PersonalInfoSchema = z.object({
  durationInMonth: z.coerce
    .number()
    .min(1, { message: "target month is required" }),
});
export type PersonalInfoData = z.infer<typeof PersonalInfoSchema>;

const TargetMonth = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const { handleGoalDuration, loading } = useGoalDuration();
  const handler = useForm<PersonalInfoData>({
    resolver: zodResolver(PersonalInfoSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: PersonalInfoData) => {
    const phone = sessionStorage.getItem("phone") || "";
    try {
      await handleGoalDuration({
        durationInMonth: data.durationInMonth,
        phone,
      });
      onNextStep && onNextStep();
    } catch (error) {
      toast.error("There was an error submitting your goal duration.");
    }
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        <h1 className="font-medium">
          In how many months would you like to achieve your target weight?
        </h1>
        <div className="flex flex-col gap-y-[15rem]">
          <div className="py-1 mt-4">
            <TextInput
              name={"durationInMonth"}
              label={"Weight Goal (months)"}
              rightLabel={"Months (s)"}
              type={"number"}
            />
          </div>

          <div className="flex justify-between items-center border-t border-[#0000004D] pt-4 px-0 mt- mt-auto mb-2">
            <SubmitButton
              className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
              onClick={onPrevStep}
            >
              Back
            </SubmitButton>
            <SubmitButton loading={loading}>Next</SubmitButton>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default TargetMonth;
