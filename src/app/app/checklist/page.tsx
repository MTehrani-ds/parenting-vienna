"use client";

import { useEffect, useMemo, useState } from "react";
import BottomNav from "../../../components/dashboard/BottomNav";
import ChecklistCard from "../../../components/dashboard/ChecklistCard";
import IconBadge from "../../../components/ui/IconBadge";
import { checklistItems as initialChecklistItems } from "../../../data/mockChecklist";
import { ChecklistCategory, ChecklistItem } from "../../../types/checklist";
import { UserProfile } from "../../../types/profile";

const categories: Array<"All" | ChecklistCategory> = [
  "All",
  "Administration",
  "Health",
  "Childcare",
  "School",
  "Planning",
];

const CHECKLIST_STORAGE_KEY = "parentingViennaChecklistProgress";

export default function ChecklistPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<"All" | ChecklistCategory>("All");
  const [items, setItems] = useState<ChecklistItem[]>(initialChecklistItems);
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

    const storedChecklist = localStorage.getItem(CHECKLIST_STORAGE_KEY);

    if (storedChecklist) {
      try {
        const parsedChecklist: ChecklistItem[] = JSON.parse(storedChecklist);
        setItems(parsedChecklist);
      } catch {
        setItems(initialChecklistItems);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(CHECKLIST_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const stageMatchedItems = useMemo(() => {
    if (!profile?.stage) return items;
    return items.filter((item) => item.stages.includes(profile.stage));
  }, [items, profile]);

  const filteredItems = useMemo(() => {
    if (selectedCategory === "All") return stageMatchedItems;
    return stageMatchedItems.filter(
      (item) => item.category === selectedCategory
    );
  }, [stageMatchedItems, selectedCategory]);

  function handleToggle(id: string) {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === id
          ? {
              ...item,
              status: item.status === "done" ? "pending" : "done",
            }
          : item
      )
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] px-4 pt-6 pb-24">
      <header className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <IconBadge icon="✅" tone="pink" />
          <div>
            <p className="text-sm font-medium text-pink-500">Parenting Vienna</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Checklist</h1>
            <p className="mt-2 text-gray-600">
              {profile?.stage
                ? `Tasks for your stage: ${profile.stage}`
                : "Your tasks for this stage"}
            </p>
          </div>
        </div>
      </header>

      <section className="mt-5 flex gap-2 overflow-x-auto pb-2">
        {categories.map((category) => {
          const isActive = selectedCategory === category;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold shadow-sm ${
                isActive
                  ? "border-pink-500 bg-pink-500 text-white"
                  : "border-pink-100 bg-white text-gray-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </section>

      <section className="mt-5 space-y-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <ChecklistCard
              key={item.id}
              item={item}
              onToggle={handleToggle}
            />
          ))
        ) : (
          <div className="rounded-3xl border border-pink-100 bg-white p-5 text-center shadow-sm">
            <p className="text-lg font-semibold text-gray-900">
              No tasks here yet
            </p>
            <p className="mt-2 text-sm text-gray-600">
              Try another category or update your profile.
            </p>
          </div>
        )}
      </section>

      <BottomNav />
    </main>
  );
}