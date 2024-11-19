export const routes = {
  REGISTER: "/whatsapp/calorie-calculator/auth",
  GOAL: "/whatsapp/calorie-calculator/goal",
  BIODATA: "/whatsapp/calorie-calculator/bio-data",
  TARGET_WEIGHT: "/whatsapp/calorie-calculator/target-weight",
  GOAL_DURATION: "/whatsapp/calorie-calculator/goal-duration",
  ACTIVITY_LEVEL: "/whatsapp/calorie-calculator/activity-level",
  HEALTH_CONDTION: "/whatsapp/calorie-calculator/health-condition",
  GET_ALL_MEAL_PLANS:(id: string) => `/whatsapp/calorie-calculator/meal-plan/${id}`,
};
