import type { Technology } from "../types";

interface TechCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

export default function TechCard({
  technology,
  onAdd,
  isAdded,
}: TechCardProps) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F8FAFC] p-2.5">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-full w-full object-contain"
          />
        </div>

        <span
          className={`rounded-full border px-3 py-1 text-xs font-semibold ${
            technology.badge === "Popular"
              ? "border-pink-300 bg-pink-100 text-pink-700"
              : technology.badge === "Versatile"
                ? "border-green-300 bg-green-100 text-green-700"
                : technology.badge === "Fast"
                  ? "border-orange-300 bg-orange-100 text-orange-700"
                  : technology.badge === "SSR"
                    ? "border-blue-300 bg-blue-100 text-blue-700"
                    : technology.badge === "Edge"
                      ? "border-purple-300 bg-purple-100 text-purple-700"
                      : technology.badge === "Top SQL"
                        ? "border-cyan-300 bg-cyan-100 text-cyan-700"
                        : technology.badge === "Essential"
                          ? "border-indigo-300 bg-indigo-100 text-indigo-700"
                          : technology.badge === "Database"
                            ? "border-sky-300 bg-sky-100 text-sky-700"
                            : "border-slate-300 bg-slate-100 text-slate-700"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      {/* Name */}
      <h3 className="mt-5 text-lg font-bold text-[#0F172A]">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mt-2 min-h-[66px] text-sm leading-6 text-[#64748B]">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating */}
      <div className="mt-4 mb-4 flex items-center gap-2">
        <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
          {technology.category}
        </span>

        <span className="shrink-0 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-600">
          {technology.difficulty}
        </span>

        <div className="ml-auto flex shrink-0 items-center gap-1.5">
          <span className="text-base text-yellow-400">★</span>

          <span className="text-sm font-semibold text-slate-700">
            {technology.rating}
          </span>
        </div>
      </div>

      {/* Add Button */}
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-auto w-full rounded-lg px-4 py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-[#121826] text-white hover:bg-[#1E293B]"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
