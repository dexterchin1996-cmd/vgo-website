import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ShareButton from "@/components/ShareButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LangProvider } from "@/lib/i18n";

export const metadata = {
  title: {
    default: "有事不用愁，上门找 V'GO · 马来西亚认证师傅平台",
    template: "%s · V'GO 客户端",
  },
  description: "马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、二手商城、找工作。平台担保交易、先报价后开工、7天质保，认证师傅随叫随到。",
  alternates: {
    canonical: "https://vgoservice.com/customer",
    languages: {
      "zh-MY": "https://vgoservice.com/customer",
      "en-MY": "https://vgoservice.com/customer?lang=en",
      "ms-MY": "https://vgoservice.com/customer?lang=ms",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_MY",
    url: "https://vgoservice.com/customer",
    siteName: "V'GO",
    title: "有事不用愁，上门找 V'GO · 马来西亚上门服务平台",
    description: "平台担保交易、先报价后开工、7天质保，认证师傅随叫随到。",
    images: [{ url: "/shared/s01.jpg", width: 1200, height: 630 }],
  },
};

export default function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-MY">
      <body className="bg-[#06111d] text-white antialiased">
        <LangProvider>
          <Navbar />
          {children}
          <BackToTop />
          <ShareButton />
          <Footer />
        </LangProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
