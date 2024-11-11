import { ContainerProps } from "../../utils/type";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import { TextInput } from "../form/text-input";
import { SubmitButton } from "../form/SubmitButton";

const PersonalInfoSchema = z.object({
  first_name: z.string().min(1, { message: "first name is required" }),
  last_name: z.string().min(1, { message: "last name is required" }),
  email: z.string().min(1, { message: "email is required" }),
  phone: z.string(),
});

export type PersonalInfoData = z.infer<typeof PersonalInfoSchema>;

const PersonalInfo = ({ onNextStep, onPrevStep }: ContainerProps) => {
  const handler = useForm<PersonalInfoData>({
    resolver: zodResolver(PersonalInfoSchema),
    mode: "onChange",
  });

  const onSubmit = (data: PersonalInfoData) => {
    console.log(data);
  };

  return (
    <Form {...handler}>
      <form
        onSubmit={handler.handleSubmit(onSubmit)}
        className="flex flex-col h-full"
      >
        <h1 className="font-medium">Personal Information</h1>
        <div className={"flex flex-col gap-3 mb-20 mt-3"}>
          <div className="py-1">
            <TextInput
              name={"first_name"}
              label={"First Name"}
              placeholder={"Enter first name"}
            />
          </div>

          <div className="py-1">
            <TextInput
              name={"last_name"}
              label={"Last Name"}
              placeholder={"Enter last name"}
            />
          </div>

          <div className="py-1">
            <TextInput
              name={"email"}
              label={"Email Address"}
              placeholder={"Enter email address"}
            />
          </div>

          <div className="py-1">
            <TextInput
              name={"phone"}
              label={"Phone number"}
              placeholder={"Enter phone number"}
            />
          </div>
        </div>

        <div className="flex justify-between items-center border-t border-[#0000004D]  pt-4 px-0 mb-3">
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

export default PersonalInfo;
