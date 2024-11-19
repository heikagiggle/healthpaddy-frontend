import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "../types";
import { useAxios } from "../useAxios";
import { GoalPayload, GoalResponse, UseGoalResponse } from "./type";

export const useGoal = (): UseGoalResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<GoalResponse>();

  const handleGoal = useCallback(
    async (payload: GoalPayload) => {
      try {
        const response = await axios.post<unknown, ApiResponse<GoalResponse>>(
          routes.GOAL,
          payload,
          {}
        );

        const { data: responseData, message } = response; 
        console.log("Response:", response);

        if (responseData?.status !== "successful") { 
          toast.error(responseData?.message || message || "An error occurred");
          setSuccess(false);
        } else {
          toast.success(responseData.message || "Goal submitted successfully");
          setData(responseData);
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error in choosing goal:", error);
        toast.error("Error in choosing goal");
        setSuccess(false);
      }
    },
    [axios]
  );

  return { loading, success, data, handleGoal };
};
