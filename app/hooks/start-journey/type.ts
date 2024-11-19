export interface RegisterPayload {
  email: string;
  firstname: string;
  lastname: string;
  phone: string;
}
export interface RegisterResponse {
  status: string;
  message: string;
}
export interface UseRegisterResponse {
  loading: boolean;
  success: boolean;
  data?: RegisterResponse | null;
  handleRegister: (payload: RegisterPayload) => Promise<void>;
}
//goal
export interface GoalPayload {
  goal: string;
  phone: string;
}
export interface GoalResponse {
  status: string;
  message: string;
}
export interface UseGoalResponse {
  loading: boolean;
  success: boolean;
  data?: GoalResponse | null;
  handleGoal: (payload: GoalPayload) => Promise<void>;
}
//biodata
export interface BioDataPayload {
  phone: string;
  dateOfBirth: string;
  gender: string;
  weight: number;
  height: string;
}
export interface BioDataResponse {
  status: string;
  message: string;
}
export interface UseBioDataResponse {
  loading: boolean;
  success: boolean;
  data?: BioDataResponse | null;
  handleBioData: (payload: BioDataPayload) => Promise<void>;
}
//targetweight
export interface TargetWeightPayload {
  phone: string;
  targetWeight: string | number;
}
export interface TargetWeightResponse {
  status: string;
  message: string;
}
export interface UseTargetWeightResponse {
  loading: boolean;
  success: boolean;
  data?: TargetWeightResponse | null;
  handleTargetWeight: (payload: TargetWeightPayload) => Promise<void>;
}
//goalduration
export interface GoalDurationPayload {
  phone: string;
  durationInMonth: string | number;
}
export interface GoalDurationResponse {
  status: string;
  message: string;
}
export interface UseGoalDurationResponse {
  loading: boolean;
  success: boolean;
  data?: GoalDurationResponse | null;
  handleGoalDuration: (payload: GoalDurationPayload) => Promise<void>;
}
//activitylevel
export interface ActivityLevelPayload {
  phone: string;
  activityLevel: string;
}
export interface ActivityLevelResponse {
  status: string;
  message: string;
}
export interface UseActivityLevelResponse {
  loading: boolean;
  success: boolean;
  data?: ActivityLevelResponse | null;
  handleActivityLevel: (payload: ActivityLevelPayload) => Promise<void>;
}
//healthcondition
export interface HealthConditionPayload {
  phone: string;
  healthCondition: string;
}
export interface HealthConditionResponse {
  status: string;
  message: string;
  data: {
    goal: string;
    requiredCalorie: string | number;
    healthCondition: string;
    bmi: string | number;
    bmiDescription: string;
    targetWeight: string | number;
    durationInMonth: string | number;
  };
}
export interface UseHealthConditionResponse {
  loading: boolean;
  success: boolean;
  data?: HealthConditionResponse | null;
  handleHealthCondition: (payload: HealthConditionPayload) => Promise<void>;
}
