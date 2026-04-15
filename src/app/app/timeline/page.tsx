"use client";

import { useEffect, useMemo, useState } from "react";
import BottomNav from "../../../components/dashboard/BottomNav";
import TimelineCard from "../../../components/dashboard/TimelineCard";
import BrandMark from "../../../components/ui/BrandMark";
import IconBadge from "../../../components/ui/IconBadge";
import { timelineItems } from "../../../data/mockTimeline";
import { UserProfile } from "../../../types/profile";

export default function TimelinePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);

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

  const activeStage = useMemo(() => {
    return profile?.stage ?? "";
  }, [profile]);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] px-4 py-6 pb-24">
      <div className="mb-5">
        <BrandMark />
      </div>

      <header className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <IconBadge icon="🕒" tone="blue" />
          <div>
            <p className="text-sm font-medium text-pink-500">Parenting Vienna</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Timeline</h1>
            <p className="mt-2 text-gray-600">
              {activeStage
                ? `Your current focus: ${activeStage}`
                : "See the parenting journey step by step"}
            </p>
          </div>
        </div>
      </header>

      <section className="mt-5 space-y-4">
        {timelineItems.map((item) => (
          <TimelineCard
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