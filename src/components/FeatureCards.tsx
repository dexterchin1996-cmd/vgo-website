"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

const BENTO_ITEMS = [
  {
    id: "repair",
    nameKey: "services_repair",
    descKey: "services_repair_desc",
    img: "/scenes/leak.jpg",
    href: "/services/repair",
    className: "col-span-2 row-span-2",
  },
  {
    id: "clean",
    nameKey: "services_clean",
    descKey: "services_clean_desc",
    img: "/features/clean.jpg",
    href: "/services/clean",
    className: "col-span-1 row-span-1",
  },
  {
    id: "errand",
    nameKey: "services_errand",
    descKey: "services_errand_desc",
    img: "/features/errand.jpg",
    href: "/services/errand",
    className: "col-span-1 row-span-1",
  },
  {
    id: "massage",
    nameKey: "services_massage",
    descKey: "services_massage_desc",
    img: "/features/massage.jpg",
    href: "/services/massage",
    className: "col-span-2 row-span-1",
  },
];

export default function FeatureCards() {
  const { t } = useLang();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax: odd-indexed cards float up, even-indexed cards sink
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section id="services" ref={containerRef} className="relative bg-[#06111d] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 relative z-10">
        <div className="mb-16 md:mb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#ff7900] font-bold text-xs tracking-[0.2em] uppercase mb-3"
          >
            {t("services_label")}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight"
          >
            {t("services_title")}
          </motion.h2>
        </div>

        {/* Bento Grid matrix with scroll parallax */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4 md:gap-6">
          {BENTO_ITEMS.map((item, i) => {
            const yOffset = i % 2 === 0 ? y1 : y2;
            return (
              <motion.div
                key={item.id}
                style={{ y: yOffset }}
                className={`relative rounded-[2rem] overflow-hidden group ${item.className}`}
              >
                <Link href={item.href} className="block w-full h-full relative">
                  <img
                    src={item.img}
                    alt={t(item.nameKey)}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <h3 className="text-2xl md:text-4xl font-black text-white mb-2">
                        {t(item.nameKey)}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {t(item.descKey)}
                      </p>
                    </div>
                  </div>
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-white">↗</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
