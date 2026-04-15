"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import BrandMark from "../../../components/ui/BrandMark";
import IconBadge from "../../../components/ui/IconBadge";

export default function OnboardingPage() {
  const router = useRouter();

  const [stage, setStage] = useState("");
  const [district, setDistrict] = useState("");
  const [language, setLanguage] = useState("English");
  const [firstChild, setFirstChild] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const profile = {
      stage,
      district,
      language,
      firstChild,
    };

    localStorage.setItem("parentingViennaProfile", JSON.stringify(profile));
    router.push("/");
  }

  return (
    <main className="mx-auto min-h-screen max-w-md bg-[#FFF6FA] px-4 py-6">
      <div className="mb-5">
        <BrandMark />
      </div>

      <div className="rounded-3xl bg-white p-5 shadow-sm">
        <div className="flex items-start gap-3">
          <IconBadge icon="👶" tone="pink" />
          <div>
            <p className="text-sm font-medium text-pink-500">Welcome</p>
            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              Make the app yours
            </h1>
            <p className="mt-2 text-gray-600">
              A few quick details will help us show more relevant guidance for
              your family.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Child / family stage
            </label>
            <select
              value={stage}
              onChange={(e) => setStage(e.target.value)}
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-gray-700"
              required
            >
              <option value="">Select stage</option>
              <option value="Pregnant">Pregnant</option>
              <option value="Newborn">Newborn</option>
              <option value="0-1 year">0–1 year</option>
              <option value="1-3 years">1–3 years</option>
              <option value="3-6 years">3–6 years</option>
              <option value="6-10 years">6–10 years</option>
              <option value="10-14 years">10–14 years</option>
              <option value="14-18 years">14–18 years</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Vienna district
            </label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="e.g. 1070"
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-gray-700"
              required
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Preferred language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-gray-700"
              required
            >
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Persian">Persian</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Is this your first child?
            </label>
            <select
              value={firstChild}
              onChange={(e) => setFirstChild(e.target.value)}
              className="w-full rounded-2xl border border-pink-100 bg-white px-4 py-3 text-gray-700"
              required
            >
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-pink-500 px-4 py-3 font-semibold text-white"
          >
            Continue
          </button>
        </form>
      </div>
    </main>
  );
}