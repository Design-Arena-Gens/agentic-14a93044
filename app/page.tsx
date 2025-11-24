import { FAQAccordion } from "@/components/FAQAccordion";
import { Hero } from "@/components/Hero";
import { ResourceList } from "@/components/ResourceList";
import { SectorGrid } from "@/components/SectorGrid";
import { Section } from "@/components/Section";
import { StepTimeline } from "@/components/StepTimeline";
import { questions, resources, sectors, steps } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Hero />

      <Section
        id="overview"
        title="ملخص سريع"
        description="اذهب في رحلة واضحة: حضّر وثائقك، اختر القطاع الملائم، اعثر على صاحب عمل موثوق، ثم أكمل إجراءات التأشيرة والإقامة في البرتغال."
      >
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              label: "مدة متوقعة",
              value: "3 - 6 أشهر",
              detail: "من بداية البحث إلى استلام التأشيرة."
            },
            {
              label: "تكلفة تقريبية",
              value: "300 - 450 يورو",
              detail: "تشمل رسوم التأشيرة، الترجمة، والتصديق."
            },
            {
              label: "قطاعات نشطة",
              value: "الضيافة، البناء، الزراعة، الصحة",
              detail: "تمتاز بنقص واضح في الكفاءات."
            }
          ].map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-primary-100 bg-white p-5 text-sm shadow-sm"
            >
              <p className="text-primary-500">{item.label}</p>
              <p className="mt-2 text-xl font-semibold text-primary-700">
                {item.value}
              </p>
              <p className="mt-2 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="steps"
        title="المسار التفصيلي للحصول على عقد"
        description="اتبع الخطوات التالية لضمان ملف قوي وشراكة موثوقة مع رب العمل البرتغالي."
      >
        <StepTimeline steps={steps} />
      </Section>

      <Section
        id="sectors"
        title="القطاعات الأكثر طلبًا"
        description="ركّز جهودك على القطاعات التي تشهد نقصًا حادًا في اليد العاملة، ما يرفع حظوظك في الحصول على عقد عمل بسرعة."
      >
        <SectorGrid sectors={sectors} />
      </Section>

      <Section
        id="resources"
        title="منصات ومكاتب موثوقة"
        description="ابدأ من الروابط الرسمية لتجنب العروض الوهمية. جميع المصادر أدناه موجهة للمترشحين من خارج الاتحاد الأوروبي."
      >
        <ResourceList resources={resources} />
      </Section>

      <Section
        id="faq"
        title="أسئلة شائعة"
        description="إجابات سريعة لأكثر الانشغالات تكرارًا عند التقديم لعقود العمل البرتغالية."
      >
        <FAQAccordion items={questions} />
      </Section>

      <footer className="mt-8 rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-primary-100 p-6 text-sm text-primary-700">
        <p>
          تنبيه: تجنب الوسطاء غير المرخصين. أبلغ عن أي عرض مشبوه إلى القنصلية
          البرتغالية أو مديرية التشغيل الجزائرية. نجاحك يعتمد على دقة الوثائق
          والالتزام بالمسار القانوني.
        </p>
      </footer>
    </>
  );
}
