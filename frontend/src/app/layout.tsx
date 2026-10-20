import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mahakyazd.ir"),
  title: "نمایندگی نرم‌افزار حسابداری محک در یزد | فروش، آموزش و پشتیبانی",
  description:
    "نمایندگی رسمی نرم‌افزار حسابداری محک در یزد. ارائه انواع نرم‌افزار حسابداری فروشگاهی، شرکتی و خدماتی با آموزش اختصاصی رایگان، اتصال به سامانه مودیان و پشتیبانی حرفه‌ای.",
  keywords: [
    "نرم افزار حسابداری محک یزد",
    "نمایندگی محک در یزد",
    "خرید نرم افزار حسابداری در یزد",
    "نرم افزار حسابداری فروشگاهی یزد",
    "قیمت نرم افزار محک یزد",
    "آموزش نرم افزار محک در یزد",
    "اتصال به سامانه مودیان یزد",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "نمایندگی نرم‌افزار حسابداری محک در یزد | فروش، آموزش و پشتیبانی",
    description:
      "مدیریت مالی آسان، دقیق و هوشمند برای کسب‌وکار شما در یزد با نرم‌افزار حسابداری محک. همراه با مشاوره و آموزش رایگان.",
    url: "https://mahakyazd.ir",
    siteName: "نرم‌افزار حسابداری محک - نمایندگی یزد",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // کد اسکیما (JSON-LD) برای معرفی نمایندگی یزد به موتور جستجوی گوگل
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "نرم‌افزار حسابداری محک - نمایندگی رسمی یزد",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Windows, Android, iOS",
    description:
      "نمایندگی رسمی فروش، نصب، آموزش رایگان و پشتیبانی نرم‌افزار حسابداری محک در استان یزد.",
    url: "https://mahakyazd.ir",
    provider: {
      "@type": "LocalBusiness",
      name: "نمایندگی نرم‌افزار حسابداری محک یزد",
      telephone: "+989103839053",
      address: {
        "@type": "PostalAddress",
        streetAddress: "میدان باهنر، جنب بابابستنی، پلاک ۷۹۰، طبقه بالا",
        addressLocality: "یزد",
        addressRegion: "یزد",
        addressCountry: "IR",
      },
    },
  };

  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}