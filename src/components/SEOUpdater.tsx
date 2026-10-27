"use client";

import { useEffect } from "react";
import { useLang } from "@/lib/i18n";

const SEO = {
  zh: {
    title: "V'GO · 全马上门Services（吉隆坡 · 槟城 · 新山 · 亚庇）",
    template: "%s · V'GO",
    description: "V'GO（V Go On）—— 全马上门Services平台。吉隆坡、雪兰莪、槟城、新山、亚庇等主要城市：按摩、美容、居家清洁、空调清洗、维修与跑腿，线上下单，Provider上门。平台担保交易、先报价后开工、7 天质保。",
    keywords: "VGO,马来西亚上门Services,全马上门Services,吉隆坡家电维修,吉隆坡按摩,槟城保洁,新山维修,亚庇上门Services,Kota Kinabalu,Kuala Lumpur,Penang,Johor Bahru,维修,清洁,按摩,跑腿",
    ogTitle: "V'GO · 有事不用愁，上门找 V'GO",
    ogDescription: "马来西亚上门Services平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。平台担保交易、先报价后开工、7 天质保。",
    twitterTitle: "V'GO · 有事不用愁，上门找 V'GO",
    twitterDescription: "马来西亚上门Services平台。居家维修、清洁、按摩、跑腿、商城、找工作，一站搞定。",
    orgDescription: "马来西亚沙巴本地生活Services平台。上门维修、清洁、按摩、跑腿、二手、招聘。平台担保交易、先报价后开工、7 天质保。",
    localBusinessDescription:
      "马来西亚全马上门生活Services平台：按摩、美容、美发、居家清洁、空调清洗、维修与跑腿。覆盖吉隆坡、雪兰莪、槟城、新山、亚庇等城市；线上下单、Provider上门、线下扫码付款由平台审核。",
    offerCatalogName: "V'GO 上门Services",
    offerNames: {
      massage: "上门按摩 / 全身推拿",
      beauty: "美容 / 美甲",
      cleaning: "居家清洁",
      aircon: "空调清洗",
      repair: "居家维修 / 水电",
      errand: "跑腿 / 代购",
    },
    faq: [
      { name: "V'GO 是什么Services？覆盖哪些地区？", text: "V'GO 是马来西亚沙巴的上门生活Services平台，提供按摩、美容、居家清洁、空调清洗、维修与跑腿。当前主要覆盖亚庇（Kota Kinabalu）的 Damai、Luyang、Likas 一带。" },
      { name: "价格怎么算？会不会有隐藏费用？", text: "下单时页面会给出报价，平台按Services项目与时长计价（例如按摩按脚/身/油压与 60/90/120 分钟计价）。应付金额在Services端重算，付款页显示的就是最终金额，多收或少收都会被系统拦下。" },
      { name: "Provider是平台审核过的吗？", text: "是。Provider与Merchant入驻需提交资料并由平台人工审核，通过后才能接单；Services完成后双方可互相评价。" },
      { name: "怎么付款？安全吗？", text: "支持线下 DuitNow 扫码或转账：客户付款后上传凭证，平台人工核对金额与凭证后确认收款，Orders才会进入Services流程；金额不符会被系统拦下并提示补付。" },
      { name: "想做Provider或Merchant，怎么加入？", text: "在Provider端或Merchant端提交入驻申请，免费入驻、无需押金，平台审核通过后即可接单；Services完成按平台结算。" },
    ],
  },
  en: {
    title: "V'GO · Malaysia Home Services (Kuala Lumpur · Penang · Johor Bahru · Kota Kinabalu)",
    template: "%s · V'GO",
    description: "V'GO (V Go On) — Malaysia home services platform. Kuala Lumpur, Selangor, Penang, Johor Bahru, Kota Kinabalu and major cities: massage, cleaning, home repair, aircon service, errands, and more. Book online, pros at your door. Platform escrow, quote first then work, 7-day warranty.",
    keywords: "VGO, Malaysia home services, home services Malaysia, Kuala Lumpur home repair, Kuala Lumpur massage, Penang cleaning, Johor Bahru repair, Kota Kinabalu home services, Kota Kinabalu, Kuala Lumpur, Penang, Johor Bahru, repair, cleaning, massage, errands",
    ogTitle: "V'GO · No worries, V'GO comes to you",
    ogDescription: "Malaysia home services platform. Home repair, cleaning, massage, errands, marketplace, jobs — all in one. Platform escrow, quote first then work, 7-day warranty.",
    twitterTitle: "V'GO · No worries, V'GO comes to you",
    twitterDescription: "Malaysia home services platform. Home repair, cleaning, massage, errands, marketplace, jobs — all in one.",
    orgDescription: "Sabah-based local life services platform Malaysia. Home repair, cleaning, massage, errands, second-hand, recruitment. Platform escrow, quote first then work, 7-day warranty.",
    localBusinessDescription:
      "Malaysia nationwide home services platform: massage, beauty, hairdressing, home cleaning, aircon cleaning, repair and errands. Covers Kuala Lumpur, Selangor, Penang, Johor Bahru, Kota Kinabalu and other cities; order online, pros at your door, offline QR payment reviewed by platform.",
    offerCatalogName: "V'GO Home Services",
    offerNames: {
      massage: "Home Massage / Full Body Massage",
      beauty: "Beauty / Nail Art",
      cleaning: "Home Cleaning",
      aircon: "Aircon Service",
      repair: "Home Repair / Electrical & Plumbing",
      errand: "Errand / Shopping",
    },
    faq: [
      { name: "What is V'GO? Which areas do you cover?", text: "V'GO is a home services platform based in Sabah, Malaysia, providing massage, beauty, home cleaning, aircon cleaning, repair and errands. Currently mainly covering Kota Kinabalu areas of Damai, Luyang, Likas." },
      { name: "How is pricing calculated? Any hidden fees?", text: "Quotes are shown on the page when ordering. Platform calculates based on service item and duration (e.g. massage by foot/body/oil and 60/90/120 minutes). Payable amount is recalculated on the merchant side; the amount shown on the payment page is the final amount. Overcharges or undercharges are blocked by the system." },
      { name: "Are pros platform-vetted?", text: "Yes. Pros and merchants must submit documents and pass manual platform review before taking orders; both parties can review each other after service completion." },
      { name: "How to pay? Is it safe?", text: "Supports offline DuitNow QR or bank transfer: customer pays then uploads receipt; platform manually verifies amount and receipt before confirming payment, order enters service flow; amount mismatch is blocked and top-up is prompted." },
      { name: "Want to be a pro or merchant, how to join?", text: "Submit application on the pro or merchant side, free onboarding, no deposit; after platform review approval, you can take orders; service completion is settled by the platform." },
    ],
  },
  ms: {
    title: "V'GO · Perkhidmatan Rumah Malaysia (Kuala Lumpur · Pulau Pinang · Johor Bahru · Kota Kinabalu)",
    template: "%s · V'GO",
    description: "V'GO (V Go On) — Platform perkhidmatan rumah Malaysia. Kuala Lumpur, Selangor, Pulau Pinang, Johor Bahru, Kota Kinabalu dan bandar utama: urutan, pembersihan, pembaikan rumah, servis udara, penghantaran, dan lagi. Tempah dalam talian, tukang di pintu anda. Jaminan platform, sebut harga dulu baru kerja, jaminan 7 hari.",
    keywords: "VGO, perkhidmatan rumah Malaysia, pembaikan rumah Kuala Lumpur, urutan Kuala Lumpur, pembersihan Pulau Pinang, pembaikan rumah Johor Bahru, perkhidmatan rumah Kota Kinabalu, Kota Kinabalu, Kuala Lumpur, Pulau Pinang, Johor Bahru, pembaikan, pembersihan, urutan, penghantaran",
    ogTitle: "V'GO · Tiada masalah, V'GO datang",
    ogDescription: "Platform perkhidmatan rumah Malaysia. Baiki rumah, cuci, urut, beli-belah, pasar, kerja — semua di satu tempat. Jaminan platform, sebut harga dulu baru kerja, jaminan 7 hari.",
    twitterTitle: "V'GO · Tiada masalah, V'GO datang",
    twitterDescription: "Platform perkhidmatan rumah Malaysia. Baiki rumah, cuci, urut, beli-belah, pasar, kerja — semua di satu tempat.",
    orgDescription: "Platform perkhidmatan tempatan Malaysia. Baiki rumah, cuci, urut, beli-belah, pasaran, kerja. Jaminan platform, sebut harga dulu baru kerja, jaminan 7 hari.",
    localBusinessDescription:
      "Platform perkhidmatan rumah meluas Malaysia: urutan, kecantikan, rambut, pembersihan rumah, servis udara, pembaikan dan penghantaran. Meliputi Kuala Lumpur, Selangor, Pulau Pinang, Johor Bahru, Kota Kinabalu dan bandar lain; tempah dalam talian, tukang di pintu anda, pembayaran QR luar tangga disemak platform.",
    offerCatalogName: "Perkhidmatan Rumah V'GO",
    offerNames: {
      massage: "Urutan ke Rumah / Pijatan Penuh Badan",
      beauty: "Kecantikan / Kuku",
      cleaning: "Pembersihan Rumah",
      aircon: "Servis Udara",
      repair: "Pembaikan Rumah / Elektrik & Paip",
      errand: "Penghantaran / Belian",
    },
    faq: [
      { name: "Apa itu V'GO? Kawasan manakah yang diliputi?", text: "V'GO ialah platform perkhidmatan rumah Malaysia yang bermula di Sabah, menyediakan urutan, kecantikan, pembersihan rumah, servis udara, pembaikan dan penghantaran. Secara utama meliputi kawasan Kota Kinabalu Damai, Luyang, Likas." },
      { name: "Bagaimana harga dikira? Ada caj tersembunyi?", text: "Sebut harga dipaparkan pada halaman semasa memesan. Platform kira berdasarkan item perkhidmatan dan masa (contoh urutan menurut kaki/badan/minyak dan 60/90/120 minit). Amaun yang kena dibayar diira semula di pihak peniaga; amaun yang dipaparkan pada halaman bayaran adalah amaun akhir. Tiada tambahan atau kurang amaun akan dicegat sistem." },
      { name: "Tukang disahkan platform?", text: "Ya. Semua tukang dan peniaga perlu hantar dokumen dan lulus semakan manual platform sebelum ambil pesanan; kedua-dua pihak boleh saling ulas selepas perkhidmatan selesai." },
      { name: "Bagaimana bayar? Selamat?", text: "Sokongan QR DuitNow atau transfer bank luar talian: pelanggan bayar kemudian muat naik resit; platform semak secara manual amaun dan resit sebelum mengesahkan pembayaran, pesanan memasuki aliran perkhidmatan; amaum tidak sepadan akan dicegat dan dorongan tambahan." },
      { name: "Mahu jadi tukang atau peniaga, bagaimana sertai?", text: "Hantar permohonan pada pihak tukang atau peniaga, pendaftaran percuma, tiada deposit; selepas lulus semakan platform, boleh ambil pesanan; penyelesaian perkhidmatan dibayar oleh platform." },
    ],
  },
};

function getCookieLang(): "zh" | "en" | "ms" | null {
  if (typeof document === "undefined") return null;
  try {
    const match = document.cookie.match(/(?:^|; )vgo_lang=([^;]*)/);
    if (match && (match[1] === "zh" || match[1] === "en" || match[1] === "ms")) {
      return match[1];
    }
  } catch {}
  return null;
}

function setMeta(name: string, value: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setProperty(property: string, value: string) {
  if (typeof document === "undefined") return;
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

export function SEOUpdater() {
  const { lang } = useLang();

  useEffect(() => {
    const current = getCookieLang() ?? lang;
    const s = SEO[current] ?? SEO.zh;

    // Update document title
    document.title = s.title;

    // Update meta tags
    setMeta("description", s.description);
    setMeta("keywords", s.keywords);

    // Update Open Graph / Twitter properties
    setProperty("og:title", s.ogTitle);
    setProperty("og:description", s.ogDescription);
    setProperty("twitter:title", s.twitterTitle);
    setProperty("twitter:description", s.twitterDescription);

    // Update JSON-LD scripts
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script) => {
      try {
        const data = JSON.parse(script.textContent || "{}");
        const type = data["@type"];

        if (type === "Organization") {
          data.description = s.orgDescription;
        } else if (type === "LocalBusiness") {
          data.description = s.localBusinessDescription;
          if (data.hasOfferCatalog) {
            data.hasOfferCatalog.name = s.offerCatalogName;
            const items = data.hasOfferCatalog.itemListElement || [];
            const keys = ["massage", "beauty", "cleaning", "aircon", "repair", "errand"] as const;
            items.forEach((item: any, i: number) => {
              const key = keys[i];
              if (key && item.itemOffered) {
                item.itemOffered.name = s.offerNames[key];
              }
            });
          }
        } else if (type === "FAQPage") {
          data.mainEntity = s.faq.map((f) => ({
            "@type": "Question",
            name: f.name,
            acceptedAnswer: { "@type": "Answer", text: f.text },
          }));
        }

        script.textContent = JSON.stringify(data);
      } catch {}
    });
  }, [lang]);

  return null;
}
