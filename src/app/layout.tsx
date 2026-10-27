import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ShareButton from "@/components/ShareButton";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LangProvider } from "@/lib/i18n";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vgoservice.com";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FF6600" },
    { media: "(prefers-color-scheme: dark)", color: "#06111d" },
  ],
  viewportFit: "cover" as const,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "V'GO · 全马上门服务（吉隆坡 · 槟城 · 新山 · 亚庇）",
    template: "%s · V'GO",
  },
  description: "V'GO（V Go On）—— 全马上门服务平台。吉隆坡、雪兰莪、槟城、新山、亚庇等主要城市：按摩、美容、居家清洁、空调清洗、维修与跑腿，线上下单，师傅上门。平台担保交易、先报价后开工、7 天质保。",
  keywords: ["VGO", "马来西亚上门服务", "全马上门服务", "吉隆坡家电维修", "吉隆坡按摩", "槟城保洁", "新山维修", "亚庇上门服务", "Kota Kinabalu", "Kuala Lumpur", "Penang", "Johor Bahru", "维修", "清洁", "按摩", "跑腿"],
  authors: [{ name: "Ventus Reflexology" }],
  creator: "Ventus Reflexology",
  publisher: "Ventus Reflexology",
  alternates: {
    canonical: BASE_URL,
    languages: {
      "zh-MY": BASE_URL,
      "en-MY": BASE_URL + "/?lang=en",
      "ms-MY": BASE_URL + "/?lang=ms",
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_MY",
    alternateLocale: ["en_MY", "ms_MY"],
    url: BASE_URL,
    siteName: "V'GO",
    title: "V'GO · 有事不用愁，上门找 V'GO",
    description: "马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。平台担保交易、先报价后开工、7 天质保。",
    images: [
      { url: "/shared/s01.jpg", width: 1200, height: 630, alt: "V'GO - 有事不用愁，上门找 V'GO" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "V'GO · 有事不用愁，上门找 V'GO",
    description: "马来西亚上门服务平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
    images: ["/shared/s01.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/logo-mark.svg",
  },
  category: "service",
};

// ═════════════════════════════════════════════════════════════════════
// JSON-LD Schema.org — AEO / SEO 结构化数据
// Organization + LocalBusiness + WebSite + FAQPage + Service (OfferCatalog)
// ═════════════════════════════════════════════════════════════════════
const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": BASE_URL + "#organization",
  name: "V'GO",
  alternateName: "V Go On",
  url: BASE_URL,
  logo: BASE_URL + "/logo-mark.svg",
  image: BASE_URL + "/shared/s01.jpg",
  description: "马来西亚沙巴本地生活服务平台。上门维修、清洁、按摩、跑腿、二手、招聘。平台担保交易、先报价后开工、7 天质保。",
  brand: "V'GO",
  founder: {
    "@type": "Organization",
    name: "Ventus Reflexology",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lot 123, Jalan Luyang",
    addressLocality: "Kota Kinabalu",
    addressRegion: "Sabah",
    postalCode: "88400",
    addressCountry: "MY",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: "+60-11-7269-1788",
    email: "support.vgo@gmail.com",
    availableLanguage: ["zh", "en", "ms"],
    areaServed: "MY",
    contactOption: "TollFree",
  },
  sameAs: [
    BASE_URL,
    "https://www.facebook.com/vgo.malaysia",
    "https://www.instagram.com/vgo.malaysia",
    "https://www.tiktok.com/@vgo.malaysia",
    "https://wa.me/601172691788",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "V'GO 上门服务",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "上门按摩 / 全身推拿", serviceType: "Massage", category: "Wellness" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "美容 / 美甲", serviceType: "Beauty", category: "Beauty" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "居家清洁", serviceType: "Home Cleaning", category: "Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "空调清洗", serviceType: "Aircon Service", category: "Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "居家维修 / 水电", serviceType: "Home Repair", category: "Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "跑腿 / 代购", serviceType: "Errand", category: "Errand" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "二手商城", serviceType: "Marketplace", category: "Marketplace" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "找工作 / 零工招聘", serviceType: "Jobs", category: "Jobs" } },
    ],
  },
  areaServed: [
    { "@type": "City", name: "Kuala Lumpur" },
    { "@type": "City", name: "Petaling Jaya" },
    { "@type": "City", name: "George Town" },
    { "@type": "City", name: "Johor Bahru" },
    { "@type": "City", name: "Kota Kinabalu" },
    { "@type": "City", name: "Kuching" },
    { "@type": "AdministrativeArea", name: "Sabah" },
    { "@type": "AdministrativeArea", name: "Selangor" },
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "22:00",
  },
  priceRange: "RM30–RM300",
  currenciesAccepted: "MYR",
  paymentAccepted: "DuitNow QR, Bank Transfer, Cash",
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": BASE_URL + "#website",
  url: BASE_URL,
  name: "V'GO",
  inLanguage: ["zh-MY", "en-MY", "ms-MY"],
  publisher: { "@id": BASE_URL + "#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: BASE_URL + "/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const jsonLdLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BASE_URL + "#localbusiness",
  name: "V'GO Services",
  alternateName: "V Go On",
  url: BASE_URL,
  image: BASE_URL + "/shared/s01.jpg",
  logo: BASE_URL + "/logo-mark.svg",
  description: "马来西亚全马上门生活服务平台：按摩、美容、美发、居家清洁、空调清洗、维修与跑腿。覆盖吉隆坡、雪兰莪、槟城、新山、亚庇等城市；线上下单、师傅上门、线下扫码付款由平台审核。",
  email: "support.vgo@gmail.com",
  telephone: "+60-11-7269-1788",
  priceRange: "RM30–RM300",
  currenciesAccepted: "MYR",
  paymentAccepted: "DuitNow QR, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kota Kinabalu",
    addressRegion: "Sabah",
    postalCode: "88400",
    addressCountry: "MY",
  },
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "City", name: "Kuala Lumpur" },
    { "@type": "City", name: "Petaling Jaya" },
    { "@type": "City", name: "George Town" },
    { "@type": "City", name: "Johor Bahru" },
    { "@type": "City", name: "Kota Kinabalu" },
    { "@type": "City", name: "Kuching" },
    { "@type": "AdministrativeArea", name: "Sabah" },
    { "@type": "AdministrativeArea", name: "Selangor" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "V'GO 上门服务",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "上门按摩 / 全身推拿", serviceType: "Massage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "美容 / 美甲", serviceType: "Beauty" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "居家清洁", serviceType: "Home Cleaning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "空调清洗", serviceType: "Aircon Service" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "居家维修 / 水电", serviceType: "Home Repair" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "跑腿 / 代购", serviceType: "Errand" } },
    ],
  },
};

// AEO FAQPage — 常见问题结构化数据，供 AI 搜索引擎直接抓取
const jsonLdFAQPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": BASE_URL + "#faqpage",
  mainEntity: [
    {
      "@type": "Question",
      name: "V'GO 是什么服务？覆盖哪些地区？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "V'GO 是马来西亚沙巴的上门生活服务平台，提供按摩、美容、居家清洁、空调清洗、维修与跑腿。当前主要覆盖亚庇（Kota Kinabalu）的 Damai、Luyang、Likas 一带，正在逐步扩展至全马主要城市。",
      },
    },
    {
      "@type": "Question",
      name: "价格怎么算？会不会有隐藏费用？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "下单时页面会给出报价，平台按服务项目与时长计价（例如按摩按脚/身/油压与 60/90/120 分钟计价）。应付金额在服务端重算，付款页显示的就是最终金额，多收或少收都会被系统拦下。",
      },
    },
    {
      "@type": "Question",
      name: "师傅是平台审核过的吗？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "是。师傅与商家入驻需提交资料并由平台人工审核，通过后才能接单；服务完成后双方可互相评价。",
      },
    },
    {
      "@type": "Question",
      name: "怎么付款？安全吗？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "支持线下 DuitNow 扫码或转账：客户付款后上传凭证，平台人工核对金额与凭证后确认收款，订单才会进入服务流程；金额不符会被系统拦下并提示补付。",
      },
    },
    {
      "@type": "Question",
      name: "想做师傅或商家，怎么加入？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "在师傅端或商家端提交入驻申请，免费入驻、无需押金，平台审核通过后即可接单，服务完成按平台结算。",
      },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-MY" >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQPage) }}
        />
      </head>
      <body className="bg-[#06111d] text-white antialiased selection:bg-[#FF6600] selection:text-white">
        <LangProvider>
          <Navbar />
          <main role="main">{children}</main>
          <BackToTop />
          <ShareButton />
        </LangProvider>
        <CookieBanner />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
