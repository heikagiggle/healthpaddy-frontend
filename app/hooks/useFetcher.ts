import { AxiosError } from 'axios';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import useSWR from 'swr';

import { ApiResponse } from './types';
import { useAxios } from './useAxios';

export const useFetcher = <T>(url?: string | null, hideToast?: boolean) => {
  const { axios } = useAxios();

  const fetcher = (url: string) => axios.get<never, ApiResponse<T>>(url);

  const { data, isValidating, error, mutate } = useSWR<
    ApiResponse<T>,
    AxiosError<ApiResponse>
  >(url, fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 0,
    revalidateIfStale: false,
  });

  useEffect(() => {
    if (hideToast) return;

    if (error) {
      const errorMessages: string[] = (error.response?.data.message ?? '')
        .split(',')
        .map((m: any) => m.trim());
      for (const message of errorMessages) {
        toast.error(message);
      }
    }
  }, [error, hideToast]);

  return {
    data,
    isValidating,
    error,
    mutate,
  };
};
