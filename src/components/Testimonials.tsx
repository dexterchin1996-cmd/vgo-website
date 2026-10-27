"use client";

import { motion } from "motion/react";
import { Star } from "lucide-react";
import { useLang } from "@/lib/i18n";

const REVIEWS = [
  {
    nameKey: "review_sarah_name",
    roleKey: "review_sarah_role",
    textKey: "review_sarah_text",
    img: "/shared/s03.jpg",
  },
  {
    nameKey: "review_ahmad_name",
    roleKey: "review_ahmad_role",
    textKey: "review_ahmad_text",
    img: "/shared/s05.jpg",
  },
  {
    nameKey: "review_li_name",
    roleKey: "review_li_role",
    textKey: "review_li_text",
    img: "/shared/s07.jpg",
  },
];
export default function Testimonials() {
  const { t } = useLang();

  return (
    <section className="relative bg-[#0a0f18] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-row flex-wrap justify-between items-end mb-16 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#ff7900] font-bold text-xs tracking-[0.2em] uppercase mb-3"
            >
              {t("testimonials_label")}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-5xl font-black text-white tracking-tight"
            >
              {t("testimonials_title")}
            </motion.h2>
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6" style={{ perspective: "1000px" }}>
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.nameKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ rotateX: 5, rotateY: -5, translateZ: 20 }}
              className="relative p-8 rounded-3xl bg-[#06111d] border border-white/5 shadow-2xl flex flex-col justify-between"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-[#ff7900] text-[#ff7900]" />
                  ))}
                </div>
                <p className="text-white/80 text-base leading-relaxed mb-8 whitespace-nowrap">
                  "{t(r.textKey)}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                <img src={r.img} alt={t(r.nameKey)} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <div className="text-white font-bold text-sm whitespace-nowrap">{t(r.nameKey)}</div>
                  <div className="text-white/40 text-xs whitespace-nowrap">{t(r.roleKey)}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
