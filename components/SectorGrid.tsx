import { Sector } from "@/lib/data";

type SectorGridProps = {
  sectors: Sector[];
};

export function SectorGrid({ sectors }: SectorGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {sectors.map((sector) => (
        <article
          key={sector.name}
          className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-primary-700">
            {sector.name}
          </h3>
          <p className="mt-3 text-sm text-primary-600">{sector.demand}</p>
          <ul className="mt-4 space-y-2 text-slate-600">
            {sector.requirements.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-primary-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
