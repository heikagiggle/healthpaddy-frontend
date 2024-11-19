import Axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ApiResponse, UseAxiosResponse } from './types';

export const useAxios = (): UseAxiosResponse => {
  const [loading, setLoading] = useState<boolean>(false);

  const axios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  });

  axios.interceptors.request.use((config) => {
    setLoading(true);
    return config;
  });

  axios.interceptors.response.use(
    (response: AxiosResponse) => {
      setLoading(false);
      return response;
    },
    (error: AxiosError<ApiResponse>) => {
      setLoading(false);
      if (!error.response) {
        toast.error('Connection error');
        throw error;
      }

      const response = error.response;

      if (response.status >= 500) {
        toast.error('An unknown server error occurred');
      } else if (response.status === 404) {
        toast.error('Resource not found');
      } else if (response.status === 401) {
        toast.error(response.data.message);
      } else {
        toast.error(response.data.message);
      }

      throw error;
    }
  );

  return { axios, loading };
};
