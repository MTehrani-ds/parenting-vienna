import Link from "next/link";
import BrandMark from "../components/ui/BrandMark";
import IconBadge from "../components/ui/IconBadge";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#FFF6FA] text-gray-900">
      <section className="mx-auto max-w-6xl px-6 py-8">
        <BrandMark />
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold text-pink-500">
            Parenting & Family Guidance in Vienna
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            One place for family life, education, and everyday support
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            A family-focused platform for parents in Vienna — from pregnancy and
            early childhood to kindergarten, school years, and education
            pathways.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/app"
              className="rounded-2xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-sm"
            >
              Open App
            </Link>

            <Link
              href="/app/onboarding"
              className="rounded-2xl border border-pink-200 bg-white px-5 py-3 font-semibold text-gray-800"
            >
              Get Personalized
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
              Vienna-focused
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
              Family-friendly
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-sm text-gray-700 shadow-sm">
              Mobile-first
            </span>
          </div>
        </div>

        <div className="rounded-[32px] bg-gradient-to-br from-pink-100 via-white to-blue-100 p-6 shadow-sm">
          <div className="grid gap-4">
            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <IconBadge icon="✅" tone="pink" />
                <div>
                  <h3 className="text-lg font-bold">Smart checklist</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Track important steps for your child’s current stage.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <IconBadge icon="📍" tone="blue" />
                <div>
                  <h3 className="text-lg font-bold">Useful places</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Discover nearby family-friendly places in Vienna.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <IconBadge icon="🎓" tone="blue" />
                <div>
                  <h3 className="text-lg font-bold">Education guidance</h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Understand kindergarten, school, and education pathways.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">For new parents</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Get support for first registrations, health appointments, and life
              with a newborn.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">For growing families</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Explore childcare, routines, kindergartens, and family-friendly
              services in Vienna.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold">For school years</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Learn about primary school, Mittelschule, AHS, HTL, and other
              education paths.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-4">
        <div className="rounded-[32px] bg-white p-8 shadow-sm">
          <h2 className="text-3xl font-bold">How it works</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl bg-[#FFF6FA] p-5">
              <p className="text-sm font-semibold text-pink-500">Step 1</p>
              <h3 className="mt-2 text-lg font-bold">Choose your stage</h3>
              <p className="mt-2 text-sm text-gray-600">
                Tell the app whether you are expecting, raising a toddler, or
                navigating school years.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FFF6FA] p-5">
              <p className="text-sm font-semibold text-pink-500">Step 2</p>
              <h3 className="mt-2 text-lg font-bold">Get guidance</h3>
              <p className="mt-2 text-sm text-gray-600">
                See relevant tasks, timelines, places, and education
                information.
              </p>
            </div>

            <div className="rounded-3xl bg-[#FFF6FA] p-5">
              <p className="text-sm font-semibold text-pink-500">Step 3</p>
              <h3 className="mt-2 text-lg font-bold">Use it every day</h3>
              <p className="mt-2 text-sm text-gray-600">
                Return to the app anytime to track progress and plan the next
                step.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <Link
              href="/app"
              className="rounded-2xl bg-pink-500 px-5 py-3 font-semibold text-white shadow-sm"
            >
              Start with the app
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}