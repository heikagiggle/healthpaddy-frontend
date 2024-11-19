import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "../types";
import { useAxios } from "../useAxios";
import { GoalDurationPayload, GoalDurationResponse, UseGoalDurationResponse } from "./type";

export const useGoalDuration = (): UseGoalDurationResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<GoalDurationResponse>();

  const handleGoalDuration = useCallback(
    async (payload: GoalDurationPayload) => {
      try {
        const response = await axios.post<unknown, ApiResponse<GoalDurationResponse>>(
          routes.GOAL_DURATION,
          payload,
          {}
        );

        const { data: responseData, message } = response; 
        console.log("Response:", response);

        if (responseData?.status !== "successful") { 
          toast.error(responseData?.message || message || "An error occurred");
          setSuccess(false);
        } else {
          toast.success(responseData.message || "Goal duration submitted successfully");
          setData(responseData);
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error in submitting Goal Duration:", error);
        toast.error("Error in submitting Goal Duration");
        setSuccess(false);
      }
    },
    [axios]
  );

  return { loading, success, data, handleGoalDuration };
};
