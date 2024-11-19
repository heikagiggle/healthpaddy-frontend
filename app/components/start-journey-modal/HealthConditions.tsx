import { ContainerProps } from "../../utils/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { SelectionComponent } from "../widget/SelectionComponent";
import { useHealthCondition } from "../../hooks/start-journey/HealthCondition";
import toast from "react-hot-toast";

interface HealthConditionsProps extends ContainerProps {
  handleConditionSelect: (condition: string) => void;
}

const HealthSchema = z.object({
  healthCondition: z.string().min(1, { message: "Please select" }),
});

export type HealthData = z.infer<typeof HealthSchema>;

const HealthConditions = ({
  onNextStep,
  onPrevStep,
  handleConditionSelect,
}: HealthConditionsProps) => {
  const { handleHealthCondition, loading } = useHealthCondition();
  const handler = useForm<HealthData>({
    resolver: zodResolver(HealthSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: HealthData) => {
    const phone = sessionStorage.getItem("phone") || "";
    try {
      await handleHealthCondition({
        healthCondition: data.healthCondition,
         phone,
       });
      handleConditionSelect(data.healthCondition);
    } catch (error) {
      toast.error("There was an error submitting your health Condition level.");
    }
  };


  return (
    <Form {...handler}>
      <form onSubmit={handler.handleSubmit(onSubmit)}>
        <h1 className="font-semibold">
          Are you managing any of these health conditions?
        </h1>

        <SelectionComponent
          name="healthCondition"
          label=""
          options={[
            { label: "None", value: "none" },
            { label: "Hypertension", value: "hypertension" },
            { label: "Diabetes/Pre-diabetes", value: "diabetes/pre-diabetes" },
            { label: "High Cholesterol", value: "high-cholesterol" },
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
          <SubmitButton loading={loading}>Next</SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default HealthConditions;
