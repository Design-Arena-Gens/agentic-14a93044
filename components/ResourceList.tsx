import { Resource } from "@/lib/data";

type ResourceListProps = {
  resources: Resource[];
};

const typeColors: Record<Resource["type"], string> = {
  "منصة رسمية": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "مكتب توظيف": "bg-indigo-50 text-indigo-700 border-indigo-200",
  وثيقة: "bg-amber-50 text-amber-700 border-amber-200"
};

export function ResourceList({ resources }: ResourceListProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {resources.map((resource) => (
        <a
          key={resource.name}
          href={resource.link}
          target="_blank"
          rel="noreferrer"
          className="group block rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg"
        >
          <div
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${typeColors[resource.type]}`}
          >
            {resource.type}
          </div>
          <h3 className="mt-4 text-lg font-semibold text-primary-700 group-hover:text-primary-600">
            {resource.name}
          </h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            {resource.description}
          </p>
          <span className="mt-4 inline-flex items-center text-sm font-semibold text-primary-500">
            اطلع على التفاصيل
            <svg
              className="ms-1 h-4 w-4 transition group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
      ))}
    </div>
  );
}
