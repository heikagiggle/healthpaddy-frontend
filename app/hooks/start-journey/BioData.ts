import { useCallback, useState } from "react";
import toast from "react-hot-toast";

import { routes } from "../helper/routes";
import { ApiResponse } from "../types";
import { useAxios } from "../useAxios";
import { BioDataPayload, BioDataResponse, UseBioDataResponse } from "./type";

export const useBioData = (): UseBioDataResponse => {
  const { axios, loading } = useAxios();
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState<BioDataResponse>();

  const handleBioData = useCallback(
    async (payload: BioDataPayload) => {
      try {
        const response = await axios.post<unknown, ApiResponse<BioDataResponse>>(
          routes.BIODATA,
          payload,
          {}
        );

        const { data: responseData, message } = response; 
        console.log("Response:", response);

        if (responseData?.status !== "successful") { 
          toast.error(responseData?.message || message || "An error occurred");
          setSuccess(false);
        } else {
          toast.success(responseData.message || "BioData submitted successfully");
          setData(responseData);
          setSuccess(true);
        }
      } catch (error) {
        console.error("Error in filling BioData:", error);
        toast.error("Error in filling BioData");
        setSuccess(false);
      }
    },
    [axios]
  );

  return { loading, success, data, handleBioData };
};
