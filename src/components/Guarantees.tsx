"use client";

import { motion } from "motion/react";
import { ShieldCheck, HeartHandshake, BadgeCheck, Clock, RefreshCw, User } from "lucide-react";
import { useLang } from "@/lib/i18n";

const GUARANTEES = [
  {
    icon: ShieldCheck,
    title: "平台担保交易",
    title_en: "Platform Escrow",
    title_ms: "Jaminan Platform",
    desc: "款项先进入平台托管，完工验收满意后才放款，客户无法直接拖欠。",
    desc_en: "Funds held in platform custody until you accept the job — no default risk.",
    desc_ms: "Dana disimpan dalam akaun amanah sehingga anda terima kerja.",
  },
  {
    icon: Clock,
    title: "先报价后开工",
    title_en: "Quote Before Work",
    title_ms: "Sebut Harga Sebelum Kerja",
    desc: "师傅上门前给出最终价格，你同意才开工，绝无临时加价。",
    desc_en: "Final price quoted before work begins. You agree — then work starts. No surprise fees.",
    desc_ms: "Harga akhir diberikan sebelum kerja. Anda setuju, baru bermula.",
  },
  {
    icon: RefreshCw,
    title: "7 天质保",
    title_en: "7-Day Warranty",
    title_ms: "Jaminan 7 Hari",
    desc: "服务完工后 7 天内同类问题，可申请免费返工或全额退款。",
    desc_en: "Same issue within 7 days after completion? Free redo or full refund.",
    desc_ms: "Masalah sama dalam 7 hari? Tambah kerja percuma atau bayaran balik penuh.",
  },
  {
    icon: User,
    title: "实名认证师傅",
    title_en: "Verified Professionals",
    title_ms: "Tukang Bertauliah",
    desc: "所有师傅通过身份验证、技能考核与背景审查，服务全程可追踪。",
    desc_en: "Every pro passes ID verification, background check, and skill assessment. Fully recorded.",
    desc_ms: "Setiap tukang lulus pengesahan ID, latar belakang, dan ujian kemahiran.",
  },
];

export default function Guarantees() {
  const { t, lang } = useLang();

  return (
    <section className="relative bg-[#06111d] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ff7900] font-bold text-xs tracking-[0.2em] uppercase mb-3"
          >
            V'GO Guarantee
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            安心托付的保障。
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto"
          >
            平台担保交易 · 先报价后开工 · 7 天质保 · 认证师傅随叫随到
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GUARANTEES.map((g, i) => {
            const key = lang === "en" ? "_en" : lang === "ms" ? "_ms" : "";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ff7900]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,121,0,0.15)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#ff7900] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#ff7900]/10 group-hover:scale-110 transition-all duration-500">
                  <g.icon className="w-7 h-7 text-[#ff7900]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{g.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
