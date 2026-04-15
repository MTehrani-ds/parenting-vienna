type Props = {
  stage: string;
  district: string;
};

export default function Header({ stage, district }: Props) {
  return (
    <section className="px-4 pt-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-pink-500">Parenting Vienna</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-900">
            For your family 👶
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            <span className="font-semibold text-pink-500">{stage}</span>
          </p>
          <p className="mt-1 text-sm text-blue-500">{district}</p>
        </div>

        <div className="flex gap-2">
          <button className="h-11 w-11 rounded-full bg-white shadow-sm">🌐</button>
          <button className="h-11 w-11 rounded-full bg-white shadow-sm">🔔</button>
        </div>
      </div>
    </section>
  );
}