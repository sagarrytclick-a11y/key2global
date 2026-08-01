"use client";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  accent?: "blue" | "emerald";
};

function getPageItems(page: number, totalPages: number): (number | "…")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const items: (number | "…")[] = [1];

  if (page > 3) items.push("…");

  const start = Math.max(2, page - 1);
  const end = Math.min(totalPages - 1, page + 1);

  for (let i = start; i <= end; i++) items.push(i);

  if (page < totalPages - 2) items.push("…");

  items.push(totalPages);
  return items;
}

export default function Pagination({
  page,
  totalPages,
  onChange,
  accent = "blue",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const active =
    accent === "emerald"
      ? "bg-emerald-600 text-white border-emerald-600"
      : "bg-blue-600 text-white border-blue-600";
  const idle =
    "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50";
  const items = getPageItems(page, totalPages);

  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Prev
      </button>

      {items.map((item, idx) =>
        item === "…" ? (
          <span
            key={`ellipsis-${idx}`}
            className="px-1 text-sm font-semibold text-slate-400"
          >
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            aria-current={item === page ? "page" : undefined}
            onClick={() => onChange(item)}
            className={`min-w-10 rounded-lg border px-3 py-2 text-sm font-bold transition ${
              item === page ? active : idle
            }`}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
        className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-700 transition enabled:hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  );
}
