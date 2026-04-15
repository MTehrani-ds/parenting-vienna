import Link from "next/link";
import Card from "../ui/Card";
import { HelpfulItem } from "../../types/dashboard";

type Props = {
  items: HelpfulItem[];
};

export default function HelpfulNow({ items }: Props) {
  return (
    <section className="px-4 pt-6">
      <Card className="bg-[#EAF4FF] p-5">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Helpful right now</h2>
          <Link href="/app/checklist" className="text-sm font-semibold text-blue-500">
            Open checklist
          </Link>
        </div>

        <div className="mt-4 space-y-3">
          {items.map((item) => (
            <div key={item.id} className="rounded-2xl bg-white p-4 shadow-sm">
              <h3 className="text-base font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </Card>
    </section>
  );
}