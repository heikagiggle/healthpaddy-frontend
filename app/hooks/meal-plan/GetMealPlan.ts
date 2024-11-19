import { useEffect, useState } from 'react';

import { AllMealPlanResponseData, AllMealPlanResponseProps } from './type';
import { routes } from '../helper/routes';
import { useFetcher } from '../useFetcher';

export const useGetMealPlans = (id: string): AllMealPlanResponseProps => {
  const [data, setData] = useState<Array<AllMealPlanResponseData>>([]);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(true);

  const {
    data: response,
    mutate,
    isValidating: isFetching,
  } = useFetcher<Array<AllMealPlanResponseData>>(routes.GET_ALL_MEAL_PLANS(id));

  useEffect(() => {
    if (response && !isFetching) {
      const { data: responseData, success: responseSuccess, message } = response;
      if (responseSuccess && responseData) {
        setData(responseData);
        setSuccess(true);
      } else {
        console.error('Error occurred:', message || 'Unknown error');
      }
      setLoading(false);
    }
  }, [isFetching, response]);

  return {
    loading,
    data,

    success,
    mutate,
  };
};
