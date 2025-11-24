import { Step } from "@/lib/data";

type StepTimelineProps = {
  steps: Step[];
};

export function StepTimeline({ steps }: StepTimelineProps) {
  return (
    <ol className="relative space-y-8 border-r-2 border-primary-100 pr-6">
      {steps.map((step, index) => (
        <li key={step.title} className="relative rounded-2xl bg-slate-50 p-5">
          <span className="absolute -right-[35px] top-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-500 bg-white text-base font-semibold text-primary-600">
            {index + 1}
          </span>
          <h3 className="text-lg font-semibold text-primary-700">{step.title}</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            {step.description}
          </p>
          {step.tip ? (
            <p className="mt-3 rounded-2xl bg-primary-50 px-4 py-3 text-sm text-primary-800">
              تذكير: {step.tip}
            </p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
