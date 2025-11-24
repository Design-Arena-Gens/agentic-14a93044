export function Hero() {
  return (
    <section className="mb-12 rounded-3xl bg-gradient-to-br from-primary-600 via-primary-500 to-primary-700 p-8 text-white shadow-lg sm:p-12">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.4em] text-primary-100">
          الجزائر → البرتغال
        </p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
          دليل شامل للعثور على عقد عمل في البرتغال
        </h1>
        <p className="mt-5 text-lg text-primary-50 leading-relaxed">
          مسار واضح يساعدك على فهم القطاعات المطلوبة، تجهيز الوثائق، العثور على
          عروض العمل الرسمية، وإكمال إجراءات التأشيرة من الجزائر خطوة بخطوة.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#steps"
            className="rounded-full border border-primary-100 bg-white px-5 py-3 text-sm font-semibold text-primary-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            ابدأ المسار خطوة بخطوة
          </a>
          <a
            href="#resources"
            className="rounded-full border border-primary-200 bg-primary-600/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-primary-600/30"
          >
            مصادر موثوقة
          </a>
        </div>
      </div>
    </section>
  );
}
