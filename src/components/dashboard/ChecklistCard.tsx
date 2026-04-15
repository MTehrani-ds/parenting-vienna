import { ChecklistItem } from "../../types/checklist";

type Props = {
  item: ChecklistItem;
  onToggle: (id: string) => void;
};

export default function ChecklistCard({ item, onToggle }: Props) {
  const isDone = item?.status === "done";

  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-600">
            {item.category}
          </span>

          <h3 className="mt-3 text-xl font-bold text-gray-900">
            {item.title}
          </h3>

          <p className="mt-2 text-sm text-gray-600">
            {item.description}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            isDone
              ? "bg-pink-100 text-pink-500"
              : "bg-blue-100 text-blue-500"
          }`}
        >
          {isDone ? "Done" : "Pending"}
        </span>
      </div>

      {item.documents && item.documents.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Documents
          </p>

          <div className="mt-2 flex flex-wrap gap-2">
            {item.documents.map((doc) => (
              <span
                key={doc}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                {doc}
              </span>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={() => onToggle(item.id)}
        className={`mt-4 w-full rounded-2xl px-4 py-3 font-semibold text-white ${
          isDone ? "bg-gray-400" : "bg-pink-500"
        }`}
      >
        {isDone ? "Mark as pending" : "Mark as done"}
      </button>
    </div>
  );
}