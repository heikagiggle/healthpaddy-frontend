import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { SelectionComponent } from "../widget/SelectionComponent";

const ActiveSchema = z.object({
  active: z.string().min(1, { message: "Please select" }),
});

export type ActiveData = z.infer<typeof ActiveSchema>;

const PhysicallyActive = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const handler = useForm<ActiveData>({
    resolver: zodResolver(ActiveSchema),
    mode: "onChange",
  });

  const onSubmit = (data: ActiveData) => {
    console.log(data);
  };
  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)}>
        <h1 className="font-medium">How physically active are you?</h1>
        <div className={"flex flex-col gap-3 mb-20 mt-2"}>
          <SelectionComponent
            name="active"
            label=""
            options={[
              {
                label: "Sedentary",
                description: "Little to no regular exercise",
                value: "sedentary",
              },
              {
                label: "Mild activity",
                description:
                  "Intense exercise for at least 20 minutes 1-3 times per week",
                value: "mild_activity",
              },
              {
                label: "Moderate activity",
                description: "Intense exercise for 60 min 3 - 4 times per week",
                value: "moderate_activity",
              },
              {
                label: "Heavy or labor",
                description:
                  "Intensive activity (intense exercise for 60 min or greater, 5 to 7 days per week",
                value: "heavy_labor",
              },
              {
                label: "Extreme activity",
                description:
                  "Exceedingly active and/or very demanding activities",
                value: "extreme_activity",
              },
            ]}
          />
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

export default PhysicallyActive;
