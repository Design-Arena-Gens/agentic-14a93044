import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

const title = "دليل البحث عن عقد عمل في البرتغال من الجزائر";
const description =
  "منصة إرشادية تشرح بالتفصيل خطوات وآليات الحصول على عقد عمل في البرتغال للمقيمين في الجزائر.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "دليل العمالة إلى البرتغال",
    locale: "ar",
    type: "website",
    url: "https://agentic-14a93044.vercel.app"
  }
};

export default function RootLayout({
  children
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="min-h-screen">
        <main className="mx-auto w-full max-w-5xl px-6 py-10 sm:py-12">
          {children}
        </main>
      </body>
    </html>
  );
}
