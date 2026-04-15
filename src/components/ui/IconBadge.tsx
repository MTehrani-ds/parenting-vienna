type Props = {
  icon: string;
  tone?: "pink" | "blue" | "white";
};

export default function IconBadge({ icon, tone = "pink" }: Props) {
  const toneClass =
    tone === "pink"
      ? "bg-pink-100 text-pink-500"
      : tone === "blue"
      ? "bg-blue-100 text-blue-500"
      : "bg-white text-gray-700";

  return (
    <div
      className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl shadow-sm ${toneClass}`}
    >
      {icon}
    </div>
  );
}