"use client";

import { motion } from "motion/react";
import { ShieldCheck, Zap, Award } from "lucide-react";
import { useLang } from "@/lib/i18n";

const TRUST_CARDS = [
  {
    icon: ShieldCheck,
    titleKey: "trust_title1",
    textKey: "trust_desc1",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Zap,
    titleKey: "trust_title2",
    textKey: "trust_desc2",
    color: "text-[#ff7900]",
    bg: "bg-[#ff7900]/10",
  },
  {
    icon: Award,
    titleKey: "trust_title3",
    textKey: "trust_desc3",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
];

export default function PlatformTrust() {
  const { t } = useLang();

  return (
    <section className="relative bg-[#06111d] py-16 sm:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6" style={{ perspective: "1000px" }}>
          {TRUST_CARDS.map((item, i) => (
            <motion.div
              key={item.titleKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
              className="relative p-8 rounded-3xl bg-[#0a0f18] border border-white/5 shadow-2xl flex flex-col items-center text-center"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6`}>
                <item.icon className={`w-8 h-8 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{t(item.titleKey)}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{t(item.textKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
