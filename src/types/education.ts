import { UserStage } from "./profile";

export type EducationItem = {
  id: string;
  stage: UserStage;
  title: string;
  description: string;
  options: string[];
};