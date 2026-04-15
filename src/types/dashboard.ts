export type ProgressData = {
  completed: number;
  pending: number;
  nextTask: string;
};

export type PlaceItem = {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  distance: string;
  image: string;
};

export type HelpfulItem = {
  id: string;
  title: string;
  subtitle: string;
};

export type StageData = {
  title: string;
  subtitle: string;
  buttonLabel: string;
};