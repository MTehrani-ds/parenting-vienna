"use client";

import { useEffect, useMemo, useState } from "react";
import BottomNav from "../../../components/dashboard/BottomNav";
import EducationCard from "../../../components/dashboard/EducationCard";
import BrandMark from "../../../components/ui/BrandMark";
import IconBadge from "../../../components/ui/IconBadge";
import { educationItems } from "../../../data/mockEducation";
import { UserProfile, UserStage } from "../../../types/profile";

const filters: Array<"All" | UserStage> = [
  "All",
  "3-6 years",
  "6-10 years",
  "10-14 years",
  "14-18 years",
];

export default function EducationPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<"All" | UserStage>("All");

  useEffect(() => {
    const storedProfile = localStorage.getItem("parentingViennaProfile");

    if (storedProfile) {
      try {
        const parsedProfile: UserProfile = JSON.parse(storedProfile);
        setProfile(parsedProfile);
      } catch {
        setProfile(null);
      }
    }
  }, []);

  const filteredEducationItems = useMemo(() => {
    if (selectedFilter === "All") return educationItems;
    return educationItems.filter((item) => item.stage === selectedFilter);
  }, [selectedFilter]);

  const activeStage = profile?.stage ?? "";

  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] px-4 py-6 pb-24">
      <div className="mb-5">
        <BrandMark />
      </div>

      <header className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <IconBadge icon="🎓" tone="blue" />
          <div>
            <p className="text-sm font-medium text-pink-500">Education</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              School & learning guide
            </h1>
            <p className="mt-2 text-gray-600">
              {activeStage
                ? `Relevant education guidance for: ${activeStage}`
                : "Explore education stages and school options in Vienna"}
            </p>
          </div>
        </div>
      </header>

      <section className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {filters.map((filter) => {
          const isActive = selectedFilter === filter;

          return (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-sm ${
                isActive
                  ? "border-pink-500 bg-pink-500 text-white"
                  : "border-pink-100 bg-white text-gray-700"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </section>

      <section className="mt-5 space-y-4">
        {filteredEducationItems.map((item) => (
          <EducationCard
            key={item.id}
            item={item}
            isActive={item.stage === activeStage}
          />
        ))}
      </section>

      <BottomNav />
    </main>
  );
}