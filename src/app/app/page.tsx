"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import BottomNav from "../../components/dashboard/BottomNav";
import HelpfulNow from "../../components/dashboard/HelpfulNow";
import NearbyPlaces from "../../components/dashboard/NearbyPlaces";
import ProgressCard from "../../components/dashboard/ProgressCard";
import BrandMark from "../../components/ui/BrandMark";
import IconBadge from "../../components/ui/IconBadge";
import { helpfulItems, nearbyPlaces, progressData } from "../../data/mockDashboard";
import { UserProfile, UserStage } from "../../types/profile";

type HomeContent = {
  headline: string;
  description: string;
  chips: string[];
  currentViewLabel: string;
};

function getHomeContent(stage?: UserStage): HomeContent {
  if (!stage) {
    return {
      headline: "Calm support for growing families",
      description:
        "Practical help for parents in Vienna — from important next steps to nearby places and education guidance.",
      chips: ["Gentle guidance", "Vienna-focused", "Built for families"],
      currentViewLabel: "General support for families in Vienna",
    };
  }

  if (stage === "Pregnant" || stage === "Newborn" || stage === "0-1 year") {
    return {
      headline: "Support for your early parenting journey",
      description:
        "Stay on top of first steps, registrations, health appointments, and nearby support for your baby.",
      chips: ["Baby essentials", "Health & admin", "Local support"],
      currentViewLabel: "Baby and early-parent guidance",
    };
  }

  if (stage === "1-3 years" || stage === "3-6 years") {
    return {
      headline: "Support for everyday family life and childcare",
      description:
        "Explore childcare, kindergarten options, family-friendly places, and the next practical steps for your child.",
      chips: ["Childcare", "Kindergarten", "Daily family life"],
      currentViewLabel: "Childcare and early education guidance",
    };
  }

  return {
    headline: "Guidance for school and education decisions",
    description:
      "Find support for school pathways, education choices, and practical planning for your child’s next stage.",
    chips: ["School choices", "Education system", "Planning ahead"],
    currentViewLabel: "School and education guidance",
  };
}

export default function HomePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

    setIsLoading(false);
  }, []);

  const homeContent = useMemo(
    () => getHomeContent(profile?.stage),
    [profile?.stage]
  );

  const quickLinks = useMemo(() => {
    if (!profile?.stage) {
      return [
        {
          href: "/app/checklist",
          icon: "✅",
          tone: "pink" as const,
          title: "Checklist",
          description: "See important tasks for your family stage",
        },
        {
          href: "/app/education",
          icon: "🎓",
          tone: "blue" as const,
          title: "Education",
          description: "Explore the Vienna education journey",
        },
      ];
    }

    if (
      profile.stage === "Pregnant" ||
      profile.stage === "Newborn" ||
      profile.stage === "0-1 year"
    ) {
      return [
        {
          href: "/app/checklist",
          icon: "✅",
          tone: "pink" as const,
          title: "Checklist",
          description: "Track health, admin, and baby-related tasks",
        },
        {
          href: "/app//places",
          icon: "📍",
          tone: "blue" as const,
          title: "Places",
          description: "Find pediatricians and family-friendly places",
        },
      ];
    }

    if (profile.stage === "1-3 years" || profile.stage === "3-6 years") {
      return [
        {
          href: "/app/checklist",
          icon: "✅",
          tone: "pink" as const,
          title: "Checklist",
          description: "Manage childcare and kindergarten-related tasks",
        },
        {
          href: "/app//places",
          icon: "📍",
          tone: "blue" as const,
          title: "Places",
          description: "Find childcare and family-friendly places nearby",
        },
      ];
    }

    return [
      {
        href: "/app/education",
        icon: "🎓",
        tone: "blue" as const,
        title: "Education",
        description: "Compare school pathways and next steps",
      },
      {
        href: "/app/checklist",
        icon: "✅",
        tone: "pink" as const,
        title: "Checklist",
        description: "Track school and planning tasks",
      },
    ];
  }, [profile?.stage]);

  if (isLoading) {
    return (
      <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] px-4 py-6">
        <p className="text-gray-600">Loading...</p>
      </main>
    );
  }

  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] pb-24">
      <section className="px-4 pt-6">
        <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-pink-100 via-white to-blue-100 p-6 shadow-sm">
          <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-pink-200/50" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-blue-200/50" />

          <div className="relative">
            <div className="flex items-start justify-between gap-4">
              <BrandMark />
              <IconBadge icon="👶" tone="white" />
            </div>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-gray-900">
              {homeContent.headline}
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {homeContent.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {homeContent.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Your current view
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {profile
                  ? `${profile.stage} • District ${profile.district} • ${profile.language}`
                  : homeContent.currentViewLabel}
              </p>
            </div>
          </div>
        </div>
      </section>

      {!profile && (
        <section className="px-4 pt-4">
          <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <IconBadge icon="✨" tone="pink" />

              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900">
                  Personalize your experience
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  Tell us your child’s stage and your district to get more
                  relevant tasks, places, and guidance.
                </p>

                <Link
                  href="/app/onboarding"
                  className="mt-4 inline-block rounded-2xl bg-pink-500 px-4 py-3 font-semibold text-white"
                >
                  Start personalization
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      <ProgressCard data={progressData} />

      <section className="px-4 pt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Explore</h2>
          <p className="text-sm text-gray-500">Quick access</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-3xl bg-white p-4 shadow-sm transition hover:shadow-md"
            >
              <IconBadge icon={link.icon} tone={link.tone} />
              <h3 className="mt-4 text-lg font-bold text-gray-900">
                {link.title}
              </h3>
              <p className="mt-1 text-sm text-gray-600">{link.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <NearbyPlaces items={nearbyPlaces} />
      <HelpfulNow items={helpfulItems} />
      <BottomNav />
    </main>
  );
}