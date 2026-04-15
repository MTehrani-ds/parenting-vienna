import { UserStage } from "./profile";

export type ChecklistCategory =
  | "Administration"
  | "Health"
  | "Childcare"
  | "School"
  | "Planning";

export type ChecklistStatus = "done" | "pending";

export type ChecklistItem = {
  id: string;
  title: string;
  description: string;
  category: ChecklistCategory;
  status: ChecklistStatus;
  documents?: string[];
  stages: UserStage[];
};