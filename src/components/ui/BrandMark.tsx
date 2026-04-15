export default function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-200 to-blue-200 shadow-sm">
        <div className="absolute h-6 w-6 rounded-full bg-white/90" />
        <div className="absolute -bottom-1 h-5 w-7 rounded-t-full bg-white/90" />
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-pink-300/80" />
      </div>

      <div>
        <p className="text-sm font-semibold text-pink-500">Parenting Vienna</p>
        <p className="text-xs text-gray-500">Calm support for families</p>
      </div>
    </div>
  );
}