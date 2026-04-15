import { HelpfulItem, PlaceItem, ProgressData, StageData } from "../types/dashboard";

export const progressData: ProgressData = {
  completed: 3,
  pending: 2,
  nextTask: "Register your baby's residence in Vienna",
};

export const nearbyPlaces: PlaceItem[] = [
  {
    id: "1",
    title: "Café BabyLove",
    category: "Café",
    subtitle: "Stroller-friendly • Changing table",
    distance: "0.4 km",
    image: "/images/cafe.jpg",
  },
  {
    id: "2",
    title: "Resselpark Playground",
    category: "Playground",
    subtitle: "Shaded • Great for toddlers",
    distance: "0.6 km",
    image: "/images/playground.jpg",
  },
  {
    id: "3",
    title: "Dr. Julia Müller",
    category: "Pediatrician",
    subtitle: "English-speaking pediatrician",
    distance: "0.9 km",
    image: "/images/doctor.jpg",
  },
];

export const helpfulItems: HelpfulItem[] = [
  {
    id: "1",
    title: "How to register your baby in Vienna",
    subtitle: "Step-by-step guide for families",
  },
  {
    id: "2",
    title: "First doctor visit: What to expect",
    subtitle: "Tips for your baby's check-up",
  },
];

export const stageData: StageData = {
  title: "Week 2 after Birth",
  subtitle: "Your baby is growing fast. You're doing great.",
  buttonLabel: "View Timeline",
};