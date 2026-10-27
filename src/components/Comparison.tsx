"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ShieldCheck, Clock, Wallet, User, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "为什么选 V'GO",
    title: "传统找师傅 vs V'GO 平台",
    sub: "不再靠运气，不再怕被坑。平台把每一项顾虑都变成了明确承诺。",
    rows: [
      {
        feature: "价格是否透明",
        traditional: "师傅现场报价，随时可能坐地起价，无从比较",
        vgo: "下单前看明码标价，师傅上门前确认最终价格，你同意才开工",
        icon: Wallet,
      },
      {
        feature: "师傅是否靠谱",
        traditional: "朋友圈、路边小广告，身份不明，无背景审查",
        vgo: "实名认证 + 技能考核 + 背景调查，100% 可追溯，可投诉",
        icon: ShieldCheck,
      },
      {
        feature: "是否准时上门",
        traditional: "约了可能不来，电话不接，全靠运气",
        vgo: "系统智能派单，实时追踪师傅位置，准时率 95%+",
        icon: Clock,
      },
      {
        feature: "付款是否安全",
        traditional: "先付款，服务不好也拿不回钱，纠纷无人管",
        vgo: "平台担保交易，完工验收满意后才放款，7 天内可退款",
        icon: User,
      },
      {
        feature: "服务不满意怎么办",
        traditional: "师傅一走就没后续，返工要重新找、重新付费",
        vgo: "7 天质保，同类问题免费返工或全额退款，平台介入协调",
        icon: CheckCircle2,
      },
    ],
    cta: "亲身体验 V'GO 平台服务",
    btn: "立即下单",
  },
  en: {
    label: "Why V'GO",
    title: "Traditional vs V'GO Platform",
    sub: "No more gambling. No more fear of being scammed. Every concern becomes a platform promise.",
    rows: [
      {
        feature: "Transparent Pricing",
        traditional: "Pro quotes on-site, can hike prices anytime, no way to compare",
        vgo: "See clear prices before ordering, pro confirms final price before work, you agree then work starts",
        icon: Wallet,
      },
      {
        feature: "Reliable Pros",
        traditional: "Facebook ads, flyers, unknown identity, no background check",
        vgo: "ID verification + skill assessment + background check, 100% traceable, reportable",
        icon: ShieldCheck,
      },
      {
        feature: "On-time Arrival",
        traditional: "Booked but may not show up, calls unanswered, pure luck",
        vgo: "Smart dispatch, real-time pro tracking, 95%+ on-time rate",
        icon: Clock,
      },
      {
        feature: "Secure Payment",
        traditional: "Pay first, can't get money back if service is bad, no one handles disputes",
        vgo: "Platform escrow, payment released after you accept, refund within 7 days",
        icon: User,
      },
      {
        feature: "Not Satisfied?",
        traditional: "Pro leaves, no follow-up, rework means finding and paying again",
        vgo: "7-day warranty, free rework or full refund for same issue, platform mediates",
        icon: CheckCircle2,
      },
    ],
    cta: "Experience V'GO platform service",
    btn: "Book Now",
  },
  ms: {
    label: "Mengapa V'GO",
    title: "Tradisional vs Platform V'GO",
    sub: "Tiada lagi bergantung nasib, tiada lagi risau kena tipu. Platform ubah setiap risau menjadi janji.",
    rows: [
      {
        feature: "Harga Telus",
        traditional: "Tukang sebut harga di lokasi, boleh naik harga bila-bila, tak boleh banding",
        vgo: "Lihat harga jelas sebelum tempah, tukang sahkan harga akhir sebelum kerja, anda setuju baru kerja",
        icon: Wallet,
      },
    ],
    cta: "Rasai perkhidmatan platform V'GO",
    btn: "Tempah Sekarang",
  },
} as const;

const ROW_LABELS = {
  zh: {
    col1: "对比项",
    col2: "传统找师傅",
    col3: "V'GO 平台",
  },
  en: {
    col1: "Comparison",
    col2: "Traditional Way",
    col3: "V'GO Platform",
  },
  ms: {
    col1: "Perbandingan",
    col2: "Cara Tradisional",
    col3: "Platform V'GO",
  },
} as const;

export default function Comparison() {
  const { lang } = useLang();
  const c = C[lang as keyof typeof C] ?? C.zh;
  const labels = ROW_LABELS[lang as keyof typeof ROW_LABELS] ?? ROW_LABELS.zh;

  return (
    <section className="relative bg-[#0a0f18] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/5 w-[700px] h-[700px] bg-[#FF6600]/6 rounded-full blur-[140px] pointer-events-none" />
      <div className="relative max-w-[1300px] mx-auto px-6 md:px-16 z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF6600] font-bold text-xs tracking-[0.2em] uppercase mb-3"
          >
            {c.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto"
          >
            {c.sub}
          </motion.p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/[0.06] bg-[#06111d]/40 backdrop-blur-sm shadow-2xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5">
                <th
                  colSpan={3}
                  className="text-[var(--vgo)] font-bold text-xs tracking-widest uppercase pb-8 mb-2 border-b border-white/10"
                >
                  {labels.col1} · {labels.col2} · {labels.col3}
                </th>
              </tr>
            </thead>
            <tbody>
              {c.rows.map((row, i) => {
                const Icon = row.icon;
                return (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group border-b border-white/[0.03] last:border-0"
                  >
                    <td className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center">
                          <Icon size={20} className="text-[#FF6600]" />
                        </div>
                        <span className="font-bold text-white">{row.feature}</span>
                      </div>
                    </td>
                    <td className="p-6 text-white/50">
                      <span className="flex items-center gap-2">
                        <AlertCircle size={14} className="text-red-500/50" />
                        {row.traditional}
                      </span>
                    </td>
                    <td className="p-6 text-white/90 bg-white/[0.02] border-l border-white/[0.05]">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-[#FF6600]" />
                        {row.vgo}
                      </span>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="https://service.vgoservice.com/register"
            className="inline-flex items-center gap-2 px-12 py-5 rounded-full bg-gradient-to-b from-[#FF6600] via-[#E55A00] to-[#B44A00] text-white font-black text-base shadow-[0_20px_50px_-15px_rgba(255,102,0,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
          >
            {c.btn} <ArrowRight size={20} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
