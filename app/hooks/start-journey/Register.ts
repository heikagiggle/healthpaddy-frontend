import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "./../types";
import { useAxios } from "./../useAxios";
import { RegisterPayload, RegisterResponse, UseRegisterResponse } from "./type";

export const useRegister = (): UseRegisterResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<RegisterResponse>();

  const handleRegister = useCallback(
    async (payload: RegisterPayload) => {
      try {
        const response = await axios.post<
          unknown,
          ApiResponse<RegisterResponse>
        >(routes.REGISTER, payload, {});

        const { data: responseData, message } = response; 
        console.log("Response:", response);

        if (responseData?.status !== "successful") {
          toast.error(message || "An error occurred");
          setSuccess(false);
        } else {
          toast.success(responseData.message || "Account created successfully");
          setData(responseData);
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error in signing up:", error);
        toast.error("Error in signing up");
        setSuccess(false);
      }
    },
    [axios]
  );

  return { loading, success, data, handleRegister };
};

