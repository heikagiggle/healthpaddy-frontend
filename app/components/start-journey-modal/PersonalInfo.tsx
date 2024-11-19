import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { z } from "zod";
import { SubmitButton } from "../form/SubmitButton";
import { TextInput } from "../form/text-input";
import toast from "react-hot-toast";
import { useRegister } from "../../hooks/start-journey/Register";
import { ContainerProps } from "@/app/utils/type";

const PersonalInfoSchema = z.object({
  firstname: z.string().min(1, { message: "First name is required" }),
  lastname: z.string().min(1, { message: "Last name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
  phone: z.string().optional(),
});

export type PersonalInfoData = z.infer<typeof PersonalInfoSchema>;

interface PersonalInfoProps {
  onNextStep: (data: { phone: string }) => void;
  onPrevStep: () => void;
}

const PersonalInfo = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const { loading, handleRegister} = useRegister();

  const handler = useForm<PersonalInfoData>({
    resolver: zodResolver(PersonalInfoSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: PersonalInfoData) => {
    sessionStorage.setItem("phone", data.phone ?? "");
    try {
      await handleRegister({
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone ?? "",
      });
  
      onNextStep && onNextStep();
    } catch (e) {
      toast.error("Register error");
    }
  };  

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        <h1 className="font-medium">Personal Information</h1>
        <div className="flex flex-col gap-3 mb-20 mt-3">
          <div className="py-1">
            <TextInput
              name="firstname"
              label="First Name"
              placeholder="Enter first name"
            />
          </div>
          <div className="py-1">
            <TextInput
              name="lastname"
              label="Last Name"
              placeholder="Enter last name"
            />
          </div>
          <div className="py-1">
            <TextInput
              name="email"
              label="Email Address"
              placeholder="Enter email address"
            />
          </div>
          <div className="py-1">
            <TextInput
              name="phone"
              label="Phone number"
              placeholder="Enter phone number"
            />
          </div>
        </div>
        <div className="flex justify-between items-center border-t border-[#0000004D] pt-4 px-0 mb-3">
          <SubmitButton
            className="bg-transparent border-[#43A5AE] text-[#43A5AE] border"
            onClick={onPrevStep}
          >
            Back
          </SubmitButton>
          <SubmitButton loading={loading} type="submit">
            Next
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
};

export default PersonalInfo;
