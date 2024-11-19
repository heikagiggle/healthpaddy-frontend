import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { SelectionComponent } from "../widget/SelectionComponent";
import { useActivityLevel } from "../../hooks/start-journey/ActivityLevel";
import toast from "react-hot-toast";

const ActiveSchema = z.object({
  activityLevel: z.string().min(1, { message: "Please select" }),
});

export type ActiveData = z.infer<typeof ActiveSchema>;

const PhysicallyActive = ({
  onNextStep,
  onPrevStep,
}: ContainerProps) => {
  const { handleActivityLevel, loading, success } = useActivityLevel();
  const handler = useForm<ActiveData>({
    resolver: zodResolver(ActiveSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ActiveData) => {
    const phone = sessionStorage.getItem("phone") || "";
    try {
      await handleActivityLevel({
        activityLevel: data.activityLevel,
        phone,
      });
      onNextStep && onNextStep();
    } catch (error) {
      toast.error("There was an error submitting your active level.");
    }
  };

  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)}>
        <h1 className="font-medium">How physically active are you?</h1>
        <div className={"flex flex-col gap-3 mb-20 mt-2"}>
          <SelectionComponent
            name="activityLevel"
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
                value: "mild",
              },
              {
                label: "Moderate activity",
                description: "Intense exercise for 60 min 3 - 4 times per week",
                value: "moderate",
              },
              {
                label: "Heavy or labor",
                description:
                  "Intensive activity (intense exercise for 60 min or greater, 5 to 7 days per week",
                value: "heavy",
              },
              {
                label: "Extreme activity",
                description:
                  "Exceedingly active and/or very demanding activities",
                value: "extreme",
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
          <SubmitButton loading={loading}>Next</SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default PhysicallyActive;
