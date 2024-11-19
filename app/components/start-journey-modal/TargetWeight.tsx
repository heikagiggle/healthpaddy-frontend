import { ContainerProps } from "../../utils/type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { TextInput } from "../form/text-input";
import { SubmitButton } from "../form/SubmitButton";
import { useTargetWeight } from "../../hooks/start-journey/TargetWeight";
import toast from "react-hot-toast";

const PersonalInfoSchema = z.object({
  targetWeight: z.coerce
    .number()
    .min(1, { message: "target weight is required" }),
});

export type PersonalInfoData = z.infer<typeof PersonalInfoSchema>;

const TargetWeight = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const { handleTargetWeight, loading } = useTargetWeight();
  const handler = useForm<PersonalInfoData>({
    resolver: zodResolver(PersonalInfoSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: PersonalInfoData) => {
    const phone = sessionStorage.getItem("phone") || "";
    try {
      await handleTargetWeight({
        targetWeight: data.targetWeight,
        phone,
      });
      onNextStep && onNextStep();
    } catch (error) {
      toast.error("There was an error submitting your weight.");
    }
  };
  
  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        <h1 className="font-medium">What would be your ideal target weight?</h1>

        <div className="flex flex-col gap-y-[15rem]">
          <div className="py-1 mt-4">
            <TextInput
              name={"targetWeight"}
              label={"Target weight"}
              rightLabel={"kg"}
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

export default TargetWeight;
