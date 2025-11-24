import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, title, description, children }: SectionProps) {
  return (
    <section
      id={id}
      className="mb-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <header className="mb-6">
        <h2 className="text-2xl font-semibold text-primary-700">{title}</h2>
        {description ? (
          <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}
