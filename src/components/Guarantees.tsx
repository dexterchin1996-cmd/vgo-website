"use client";

import { motion } from "motion/react";
import { ShieldCheck, HeartHandshake, BadgeCheck, Clock } from "lucide-react";
import { useLang } from "@/lib/i18n";

const GUARANTEES = [
  { icon: ShieldCheck, titleKey: "guarantee_title1", descKey: "guarantee_desc1" },
  { icon: BadgeCheck, titleKey: "guarantee_title2", descKey: "guarantee_desc2" },
  { icon: HeartHandshake, titleKey: "guarantee_title3", descKey: "guarantee_desc3" },
  { icon: Clock, titleKey: "guarantee_title4", descKey: "guarantee_desc4" },
];

export default function Guarantees() {
  const { t } = useLang();

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
            {t("guarantee_section_label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            {t("guarantee_section_title")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {GUARANTEES.map((g, i) => (
            <motion.div
              key={g.titleKey}
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
              <h3 className="text-xl font-bold text-white mb-3">{t(g.titleKey)}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t(g.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
