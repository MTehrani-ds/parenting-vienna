import Link from "next/link";
import Card from "../ui/Card";
import { PlaceItem } from "../../types/dashboard";

type Props = {
  items: PlaceItem[];
};

function PlaceIllustration({ category }: { category: string }) {
  const content =
    category === "Café"
      ? {
          emoji: "☕",
          bg: "from-pink-100 to-orange-100",
          label: "Cozy café corner",
        }
      : category === "Playground"
      ? {
          emoji: "🛝",
          bg: "from-blue-100 to-green-100",
          label: "Play area nearby",
        }
      : {
          emoji: "🩺",
          bg: "from-blue-100 to-pink-100",
          label: "Trusted family care",
        };

  return (
    <div className={`relative h-28 overflow-hidden bg-gradient-to-r ${content.bg}`}>
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/40" />
      <div className="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-white/30" />
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-4xl">{content.emoji}</div>
        <p className="mt-2 text-xs font-medium text-gray-600">{content.label}</p>
      </div>
    </div>
  );
}

export default function NearbyPlaces({ items }: Props) {
  return (
    <section className="px-4 pt-6">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Nearby for you</h2>
          <p className="text-sm text-blue-500">Family-friendly places in Vienna</p>
        </div>
        <Link href="/app//places" className="text-sm font-semibold text-pink-500">
          See all
        </Link>
      </div>

      <div className="space-y-4">
        {items.slice(0, 2).map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <PlaceIllustration category={item.category} />

            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
                    {item.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{item.subtitle}</p>
                </div>
                <span className="rounded-full bg-pink-50 px-3 py-1 text-xs font-semibold text-pink-500">
                  {item.distance}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}