"use client";

import { useEffect, useMemo, useState } from "react";
import BottomNav from "../../../components/dashboard/BottomNav";
import NearbyPlaces from "../../../components/dashboard/NearbyPlaces";
import IconBadge from "../../../components/ui/IconBadge";
import { nearbyPlaces as allPlaces } from "../../../data/mockDashboard";
import { UserProfile } from "../../../types/profile";

const categories = ["All", "Café", "Playground", "Pediatrician"];

export default function PlacesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const storedProfile = localStorage.getItem("parentingViennaProfile");
    if (!storedProfile) return;

    try {
      const parsedProfile: UserProfile = JSON.parse(storedProfile);
      setProfile(parsedProfile);
    } catch {
      setProfile(null);
    }
  }, []);

  const filteredPlaces = useMemo(() => {
    if (selectedCategory === "All") return allPlaces;
    return allPlaces.filter((place) => place.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] px-4 pt-6 pb-24">
      <header className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <IconBadge icon="📍" tone="blue" />
          <div>
            <p className="text-sm font-medium text-pink-500">Parenting Vienna</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">Places</h1>
            <p className="mt-2 text-gray-600">
              {profile?.district
                ? `Nearby in District ${profile.district}`
                : "Find family-friendly places"}
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

      <div className="mt-5">
        <NearbyPlaces items={filteredPlaces} />
      </div>

      <BottomNav />
    </main>
  );
}