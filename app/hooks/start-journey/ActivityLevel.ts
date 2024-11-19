import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "../types";
import { useAxios } from "../useAxios";
import { ActivityLevelPayload, ActivityLevelResponse, UseActivityLevelResponse } from "./type";

export const useActivityLevel = (): UseActivityLevelResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<ActivityLevelResponse>();

  const handleActivityLevel = useCallback(
    async (payload: ActivityLevelPayload) => {
      try {
        const response = await axios.post<unknown, ApiResponse<ActivityLevelResponse>>(
          routes.ACTIVITY_LEVEL,
          payload,
          {}
        );

        const { data: responseData, message } = response; 
        console.log("Response:", response);

        if (responseData?.status !== "successful") { 
          toast.error(responseData?.message || message || "An error occurred");
          setSuccess(false);
        } else {
          toast.success(responseData.message || "Activity level submitted successfully");
          setData(responseData);
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error in submitting Activity Level:", error);
        toast.error("Error in submitting Activity Level");
        setSuccess(false);
      }
    },
    [axios]
  );

  return { loading, success, data, handleActivityLevel };
};
