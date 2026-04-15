import { TimelineItem } from "../../types/timeline";

type Props = {
  item: TimelineItem;
  isActive: boolean;
};

export default function TimelineCard({ item, isActive }: Props) {
  return (
    <div
      className={`relative rounded-3xl border bg-white p-5 shadow-sm ${
        isActive ? "border-pink-300" : "border-pink-100"
      }`}
    >
      <div className="absolute left-5 top-5 h-3 w-3 rounded-full bg-pink-400" />

      <div className="ml-6">
        <span
          className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${
            isActive
              ? "bg-pink-100 text-pink-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          {item.stage}
        </span>

        <h3 className="mt-3 text-xl font-bold text-gray-900">{item.title}</h3>
        <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>

        <div className="mt-4 rounded-2xl bg-[#FFF6FA] px-4 py-3">
          <p className="text-sm font-medium text-gray-700">{item.highlight}</p>
        </div>
      </div>
    </div>
  );
}