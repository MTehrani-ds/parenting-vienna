import { EducationItem } from "../../types/education";

type Props = {
  item: EducationItem;
  isActive: boolean;
};

export default function EducationCard({ item, isActive }: Props) {
  return (
    <div
      className={`rounded-3xl border bg-white p-5 shadow-sm ${
        isActive ? "border-pink-300" : "border-pink-100"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
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
          <p className="mt-2 text-sm leading-6 text-gray-600">
            {item.description}
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-2xl bg-[#FFF6FA] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
          What to explore
        </p>

        <div className="mt-3 space-y-2">
          {item.options.map((option) => (
            <div key={option} className="flex items-start gap-2">
              <span className="mt-1 text-pink-500">•</span>
              <p className="text-sm text-gray-700">{option}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}