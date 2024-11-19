export interface AllMealPlanResponseData {
    id: string;
  }
  
  export interface AllMealPlanResponseProps {
    success: boolean;
    loading: boolean;
    mutate?: () => void;
    data: Array<AllMealPlanResponseData>;
  }
  