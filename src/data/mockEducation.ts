import { EducationItem } from "../types/education";

export const educationItems: EducationItem[] = [
  {
    id: "1",
    stage: "3-6 years",
    title: "Kindergarten and early childhood education",
    description:
      "At this stage, families often focus on kindergarten options, early social development, and language support.",
    options: [
      "Public and private kindergarten options",
      "Application timing and required documents",
      "Language support and integration",
      "Daily routines and care hours",
    ],
  },
  {
    id: "2",
    stage: "6-10 years",
    title: "Primary school (Volksschule)",
    description:
      "Primary school years focus on school entry, learning routines, after-school care, and family support structures.",
    options: [
      "School registration process",
      "Catchment area and local school assignment",
      "After-school care options",
      "Language and learning support",
    ],
  },
  {
    id: "3",
    stage: "10-14 years",
    title: "Lower secondary education",
    description:
      "Families often compare Mittelschule and AHS pathways at this stage and look at school environment, support, and future options.",
    options: [
      "Mittelschule vs AHS overview",
      "School transition guidance",
      "Academic support and learning paths",
      "How school choice affects later options",
    ],
  },
  {
    id: "4",
    stage: "14-18 years",
    title: "Upper secondary and career-oriented pathways",
    description:
      "This stage includes choices such as AHS upper level, HTL, vocational schools, and other education pathways after compulsory schooling.",
    options: [
      "HTL and technical education paths",
      "AHS upper level overview",
      "Vocational and career-oriented schools",
      "Future planning and specialization",
    ],
  },
];