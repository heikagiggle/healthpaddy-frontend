"use client";
import React from "react";
import { TextInput } from "../../components/inputs/text-input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextAreaInput } from "../../components/inputs/textarea";
import toast from "react-hot-toast";

const MessageSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string(),
  email: z.string().min(6, "Email is required").email("Invalid email format"),
  phoneNumber: z.string(),
  message: z.string().min(2, "Message is required"),
});

export type MessageData = z.infer<typeof MessageSchema>;

export default function Support() {
  const handler = useForm<MessageData>({
    mode: "onChange",
    resolver: zodResolver(MessageSchema),
  });

  const onSubmit = async (data: MessageData) => {
    try {
      console.log(data);
      // toast.success("message sent successfully")
    } catch (e) {
      toast.error("Error in sending message");
    }
  };

  return (
    <section id="support" className="py-20">
      <div className="flex flex-col lg:flex-row justify-between gap-x-6 border border-black border-opacity-10 rounded-2xl mx-4 lg:mx-28 ">
        <div className="flex flex-col gap-y-4 bg-gradient-to-r from-[#7BB992] to-[#43A5AE] p-8 m-6 rounded-lg text-white lg:h-[576px] lg:w-1/2">
          <h3 className="text-[42px] leading-[43px] lg:text-[74px] lg:leading-[74px]">
            Get in touch
          </h3>
          <p className="leading-[17px] text-[13px] lg:leading-[23px] lg:text-[15px] text-white">
            If you have any questions, need assistance, or want to provide
            feedback, we&apos;re here to help! Please fill out the form below
            and a member of our support team will get back to you as soon as
            possible.
          </p>
        </div>
        <div className="max-w-2xl mx-auto p-6 lg:w-1/2 w-full">
          <form
            onSubmit={handler.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4 space-y-4"
          >
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <TextInput
                  label={"First Name"}
                  handler={handler}
                  title={"firstName"}
                  placeholder={"Enter first name"}
                />
              </div>
              <div className="w-full md:w-1/2">
                <TextInput
                  label={"Last Name"}
                  handler={handler}
                  title={"lastName"}
                  placeholder={"Enter last name"}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full md:w-1/2">
                <TextInput
                  label={"Email"}
                  handler={handler}
                  title={"email"}
                  placeholder={"Enter email address"}
                />
              </div>
              <div className="w-full md:w-1/2">
                <TextInput
                  label={"Phone Number"}
                  placeholder={"+234810123456"}
                  handler={handler}
                  title={"phoneNumber"}
                />
              </div>
            </div>
            <div>
              <TextAreaInput
                label={"Your Mesage"}
                placeholder={"Write Message"}
                handler={handler}
                title={"message"}
              />
            </div>
            <div className="flex justify-end">
              <button className="px-5 py-2.5 bg-buttonColor text-white text-sm rounded-full hover:opacity-90 transition-opacity duration-300">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
