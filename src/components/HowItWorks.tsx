"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { UserPlus, Smartphone, MousePointerClick, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

export default function HowItWorks() {
  const { t, lang } = useLang();
  const L = lang === "en" || lang === "ms" ? lang : "zh";

  const steps = [
    {
      num: "01",
      Icon: UserPlus,
      titleKey: "step_1",
      timeKey: "step_1_time",
      descKey: "step_1_desc",
      pointsKeys: ["step_1_point_1", "step_1_point_2", "step_1_point_3"],
      img: "/shared/s06.jpg",
    },
    {
      num: "02",
      Icon: Smartphone,
      titleKey: "step_2",
      timeKey: "step_2_time",
      descKey: "step_2_desc",
      pointsKeys: ["step_2_point_1", "step_2_point_2", "step_2_point_3"],
      img: "/shared/s07.jpg",
    },
    {
      num: "03",
      Icon: MousePointerClick,
      titleKey: "step_3",
      timeKey: "step_3_time",
      descKey: "step_3_desc",
      pointsKeys: ["step_3_point_1", "step_3_point_2", "step_3_point_3"],
      img: "/shared/s01.jpg",
    },
    {
      num: "04",
      Icon: CheckCircle2,
      titleKey: "step_4",
      timeKey: "step_4_time",
      descKey: "step_4_desc",
      pointsKeys: ["step_4_point_1", "step_4_point_2", "step_4_point_3"],
      img: "/shared/s02.jpg",
    },
  ];

  return (
    <section className="relative bg-gray-950 py-20 sm:py-28 px-5 overflow-hidden noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora absolute top-1/4 -left-24 w-96 h-96 bg-[var(--vgo)]/40 rounded-full blur-[140px]" />
        <div className="aurora-2 absolute bottom-0 -right-24 w-96 h-96 bg-[var(--vgo)]/30 rounded-full blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className={`text-[var(--vgo)] font-bold text-sm tracking-widest uppercase mb-3 ${L === "zh" ? "vgo-body" : "vgo-body"}`}>
            {t("flow_label")}
          </p>
          <h2 className={`vgo-heading text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight`}>
            {t("flow_title")}
          </h2>
          <p className={`mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto vgo-body`}>
            {t("flow_sub")}
          </p>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, type: "spring", stiffness: 70 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[var(--vgo)]/40 transition-[transform,box-shadow,opacity,width,background-color] duration-300">
                <div className="relative h-32 overflow-hidden">
                  <Image src={s.img} alt="" width={600} height={400} loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-transparent" />
                  <div className="absolute top-3 right-4 text-4xl font-black text-white/40 select-none">
                    {s.num}
                  </div>
                  <div className="absolute top-3 left-4 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--vgo)] text-white text-[10px] font-bold whitespace-nowrap">
                    {t(s.timeKey)}
                  </div>
                </div>

                <div className="relative p-5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[var(--vgo)] to-[var(--vgo-dark)] flex items-center justify-center mb-4 -mt-10 relative shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform duration-300">
                    <s.Icon size={22} strokeWidth={2.2} className="text-white" />
                  </div>
                  <h3 className={`text-base font-black text-white mb-1.5 ${L === "zh" ? "vgo-heading" : "vgo-heading"}`}>
                    {t(s.titleKey)}
                  </h3>
                  <p className={`text-xs text-white/55 leading-relaxed mb-3 ${L === "zh" ? "vgo-body" : "vgo-body"}`}>
                    {t(s.descKey)}
                  </p>
                  <ul className="space-y-1.5 pt-3 border-t border-white/10">
                    {s.pointsKeys.map((ptKey, j) => (
                      <li key={ptKey} className="flex items-center gap-2 text-[11px] text-white/65 whitespace-nowrap">
                        <span className="w-1 h-1 rounded-full bg-[var(--vgo)]" />
                        {t(ptKey)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-white/20 text-xl z-10">→</div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
