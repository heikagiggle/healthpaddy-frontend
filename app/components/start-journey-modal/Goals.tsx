import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { SelectionComponent } from "../widget/SelectionComponent";

const GoalSchema = z.object({
  goal: z.string().min(1, { message: "Please select a goal" }),
});

export type GoalData = z.infer<typeof GoalSchema>;

const Goals = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const handler = useForm<GoalData>({
    resolver: zodResolver(GoalSchema),
    mode: "onChange",
  });

  const onSubmit = (data: GoalData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        <h1 className="font-medium">
          Please let us know which goal you would like us to help you achieve
        </h1>

        <div className="flex flex-col gap-y-20">
          <SelectionComponent
            name="goal"
            label=""
            options={[
              { label: "Lose weight", value: "lose_weight" },
              { label: "Maintain weight", value: "maintain_weight" },
              { label: "Gain weight", value: "gain_weight" },
            ]}
          />
          <div className="flex justify-between items-center border-t border-[#0000004D] mt-10 pt-4 px-0 mb-2">
            <SubmitButton
              className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
              onClick={onPrevStep}
            >
              Back
            </SubmitButton>
            <SubmitButton onClick={onNextStep}>Next</SubmitButton>
          </div>
        </div>
      </form>
    </Form>
  );
};

export default Goals;