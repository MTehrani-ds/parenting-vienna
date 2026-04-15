import Link from "next/link";
import Card from "../ui/Card";
import { ProgressData } from "../../types/dashboard";

type Props = {
  data: ProgressData;
};

export default function ProgressCard({ data }: Props) {
  return (
    <section className="px-4 pt-5">
      <Card className="overflow-hidden bg-gradient-to-br from-pink-100 to-blue-100 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Your next step
            </p>
            <h2 className="mt-2 text-2xl font-bold leading-tight text-gray-900">
              {data.nextTask}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Stay on top of the most important tasks for this stage.
            </p>
          </div>

          <div className="rounded-2xl bg-white/80 px-4 py-3 text-center shadow-sm">
            <p className="text-2xl font-bold text-gray-900">{data.pending}</p>
            <p className="text-xs text-gray-500">pending</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <p className="text-2xl font-bold text-gray-900">{data.completed}</p>
            <p className="text-sm text-gray-600">Tasks done</p>
          </div>

          <div className="rounded-2xl bg-white/70 p-4 shadow-sm">
            <p className="text-2xl font-bold text-gray-900">{data.pending}</p>
            <p className="text-sm text-gray-600">Still to do</p>
          </div>
        </div>

        <Link
          href="/app/checklist"
          className="mt-5 block w-full rounded-2xl bg-pink-500 px-4 py-4 text-center text-lg font-semibold text-white shadow-sm"
        >
          Continue Checklist
        </Link>
      </Card>
    </section>
  );
}