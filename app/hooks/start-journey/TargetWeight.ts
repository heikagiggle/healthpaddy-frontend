import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "../types";
import { useAxios } from "../useAxios";
import { TargetWeightPayload, TargetWeightResponse, UseTargetWeightResponse } from "./type";

export const useTargetWeight = (): UseTargetWeightResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<TargetWeightResponse>();

  const handleTargetWeight = useCallback(
    async (payload: TargetWeightPayload) => {
      try {
        const response = await axios.post<unknown, ApiResponse<TargetWeightResponse>>(
          routes.TARGET_WEIGHT,
          payload,
          {}
        );

        const { data: responseData, message } = response; 
        console.log("Response:", response);

        if (responseData?.status !== "successful") { 
          toast.error(responseData?.message || message || "An error occurred");
          setSuccess(false);
        } else {
          toast.success(responseData.message || "Target weight submitted successfully");
          setData(responseData);
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error in submitting TargetWeight:", error);
        toast.error("Error in submitting TargetWeight");
        setSuccess(false);
      }
    },
    [axios]
  );

  return { loading, success, data, handleTargetWeight };
};
