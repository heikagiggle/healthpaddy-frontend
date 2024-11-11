import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { SelectionComponent } from "../widget/SelectionComponent";

interface HealthConditionsProps extends ContainerProps {
  handleConditionSelect: (condition: string) => void;
}

const HealthSchema = z.object({
  active: z.string().min(1, { message: "Please select" }),
});

export type HealthData = z.infer<typeof HealthSchema>;

const HealthConditions = ({
  onNextStep,
  onPrevStep,
  handleConditionSelect,
}: HealthConditionsProps) => {
  const handler = useForm<HealthData>({
    resolver: zodResolver(HealthSchema),
    mode: "onChange",
  });

  const onSubmit = (data: HealthData) => {
    // Continue to next step depending on the selection
    handleConditionSelect(data.active);
  };

  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)}>
        <h1>Are you managing any of these health conditions?</h1>

        <SelectionComponent
          name="active" // Make sure the name matches schema
          label=""
          options={[
            { label: "None", value: "none" },
            { label: "Hypertension", value: "hypertension" },
            { label: "Diabetes/Pre-diabetes", value: "diabetes" },
            { label: "High Cholesterol", value: "high_cholesterol" },
            { label: "Polycystic Ovary Syndrome (PCOS)", value: "pcos" },
            { label: "I am pregnant", value: "pregnant" },
          ]}
        />

        <div className="flex justify-between items-center border-t border-[#0000004D] pt-4 px-0 mb-2">
          <SubmitButton
            className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
            onClick={onPrevStep}
            type="button"
          >
            Back
          </SubmitButton>
          <SubmitButton type="submit">Next</SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default HealthConditions;
