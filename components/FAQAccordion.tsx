"use client";

import { useState } from "react";

type FAQAccordionProps = {
  items: { question: string; answer: string }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div
            key={item.question}
            className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <button
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between"
            >
              <span className="text-start text-base font-semibold text-primary-700">
                {item.question}
              </span>
              <span className="ms-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                {item.answer}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
