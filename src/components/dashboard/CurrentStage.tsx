import Card from "../ui/Card";
import { StageData } from "../../types/dashboard";

type Props = {
  data: StageData;
};

export default function CurrentStage({ data }: Props) {
  return (
    <section className="px-4 py-6">
      <Card className="bg-pink-50 p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-pink-500">
              Your Current Stage
            </p>
            <h2 className="mt-2 text-2xl font-bold text-gray-900">{data.title}</h2>
            <p className="mt-1 text-gray-600">{data.subtitle}</p>
          </div>

          <button className="rounded-2xl border border-blue-300 bg-white px-5 py-3 font-semibold text-blue-500">
            {data.buttonLabel}
          </button>
        </div>
      </Card>
    </section>
  );
}