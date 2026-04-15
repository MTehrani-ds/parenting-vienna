export type UserStage =
  | "Pregnant"
  | "Newborn"
  | "0-1 year"
  | "1-3 years"
  | "3-6 years"
  | "6-10 years"
  | "10-14 years"
  | "14-18 years";

export type UserProfile = {
  stage: UserStage;
  district: string;
  language: string;
  firstChild: string;
};