import type { Technology } from "../types";

interface StackSidebarProps {
  selectedTechnologies: Technology[];
  onRemove: (technologyId: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  selectedTechnologies,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  const selectedCount = selectedTechnologies.length;

  return (
    <aside className="flex flex-col rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm lg:sticky lg:top-24 lg:h-fit">
      {/* Header */}
      <div>
        <h2 className="text-xl font-bold text-[#0F172A]">Your Stack</h2>

        <p className="mt-1 text-sm text-[#64748B]">
          {selectedCount} {selectedCount === 1 ? "Technology" : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {/* Empty State */}
      {selectedCount === 0 ? (
        <div className="mt-6 rounded-xl bg-[#F8FAFC] px-5 py-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-xl shadow-sm">
            🧰
          </div>

          <h3 className="mt-4 text-sm font-semibold text-[#0F172A]">
            Your Stack is Empty
          </h3>

          <p className="mt-2 text-sm leading-6 text-[#94A3B8]">
            No technologies selected. Add technologies from the list to build
            your development stack.
          </p>
        </div>
      ) : (
        <>
          {/* Selected Technologies */}
          <div className="mt-6 space-y-3">
            {selectedTechnologies.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-3 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] p-3"
              >
                {/* Icon */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white p-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Name + Category */}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-semibold text-[#0F172A]">
                    {technology.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#94A3B8]">
                    {technology.category}
                  </p>
                </div>

                {/* Remove */}
                <button
                  onClick={() => onRemove(technology.id)}
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#94A3B8] transition hover:bg-red-50 hover:text-red-500"
                  aria-label={`Remove ${technology.name}`}
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* Remove All - Bottom */}
          <button
            onClick={onRemoveAll}
            className="mt-6 w-full rounded-lg border border-red-200 px-4 py-2.5 text-sm font-semibold text-red-500 transition hover:bg-red-50 hover:text-red-600"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
