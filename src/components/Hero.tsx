"use client";

import Image from "next/image";
import HeroBackgroundMotion from "./HeroBackgroundMotion";
import Link from "next/link";
import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { useLang } from "@/lib/i18n";

const EASE = [0.16, 1, 0.3, 1] as const;

/** Aceternity UI 風格 Spotlight：跟隨滑鼠的動態發光聚光燈 */
export function HeroSpotlight() {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const handleMove = (e: MouseEvent) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden"
      onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => handleMove(e.nativeEvent)}
    >
      <div
        className="absolute rounded-full blur-[120px] bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(255,122,0,0.15)_0%,transparent_40%)]"
        style={{
          "--mouse-x": `${x}px`,
          "--mouse-y": `${y}px`,
        } as React.CSSProperties}
      />
    </div>
  );
}

export default function Hero() {
  const { t, lang } = useLang();
  const reduce = useReducedMotion();

  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: EASE },
        };

  // 字體行高隨語言：中文行高鬆，英文/馬來文行高緊湊
  const headingLh =
    lang === "zh" ? "1.25" : lang === "ms" ? "1.15" : "1.10";
  const bodyLh = lang === "zh" ? "1.6" : "1.5";

  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#06111D]">
      {/* 1. Background layer: 原有 Ken Burns 背景 + 動態發光 Spotlight */}
      <HeroBackgroundMotion />
      <HeroSpotlight />

      {/* 2. Content layer：容器查詢包裹，根據自身寬度自適應橫排/折行 */}
      <div className="container relative z-10 mx-auto w-full max-w-[1240px] px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">

          {/* Left: Glassmorphism info card */}
          <motion.div
            {...rise(0.1)}
            className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-[20px] p-8 md:p-12 shadow-[0_8px_32px_rgba(6,17,29,0.4)]"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-[11px] font-bold tracking-widest uppercase text-white/70 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
              {t("hero_tag")}
            </div>

            {/* H1 Title：漸變文字，字體行高隨語言 */}
            <h1
              className={`font-display text-[40px] md:text-[56px] lg:text-[64px] font-black tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FF7A00] to-[#FF6600] drop-shadow-[0_0_24px_rgba(255,122,0,0.4)] leading-[${headingLh}]`}
            >
              {t("hero_title1")}
              <br />
              <span className="text-[#FF7A00] drop-shadow-[0_0_24px_rgba(255,122,0,0.4)]">
                {t("hero_title2")}
              </span>
            </h1>

            {/* Subtitle：行高隨語言，防截斷 */}
            <p className={`mt-6 max-w-[480px] text-[15px] md:text-[16px] leading-[${bodyLh}] text-white/60 vgo-line-clamp-3`}>
              {t("hero_sub")}
            </p>

            {/* 4 角色快速分流：強制橫排，空間不足自動折行 */}
            <div className="mt-8 flex flex-row flex-wrap gap-3">
              <Link
                href="/how-it-works/customer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
              >
                {t("cta_customer")}
              </Link>
              <Link
                href="/technician"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-4 py-2 text-[12px] font-semibold text-[#FF7A00] backdrop-blur hover:bg-[#FF7A00]/20 transition-all whitespace-nowrap"
              >
                {t("cta_tech")}
              </Link>
              <Link
                href="/merchant"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
              >
                {t("cta_merchant")}
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur hover:bg-white/10 hover:text-white transition-all whitespace-nowrap"
              >
                {t("nav_partner")}
              </Link>
            </div>

            {/* 真實場景對比卡片：師傅修管道 vs 客戶從容喝茶 */}
            <motion.div {...rise(0.3)} className="mt-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
              <div className="relative rounded-3xl overflow-hidden group border border-white/10 bg-[#06111d]/40 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1581539228445-1dcb974e6b2f?w=600&q=80"
                  alt="Technician fixing pipe at night"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-[#FF7A00] font-bold text-xs tracking-widest uppercase whitespace-nowrap">{t("hero_scenario_pain_label")}</span>
                  <h3 className="text-xl font-black text-white mt-1 leading-tight whitespace-nowrap">{t("hero_scenario_pain_title")}</h3>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed whitespace-nowrap">{t("hero_scenario_pain_desc")}</p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden group border border-white/10 bg-[#06111d]/40 backdrop-blur-sm">
                <Image
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80"
                  alt="Customer relaxing with tea at home"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#06111d] via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <span className="text-[#22c55e] font-bold text-xs tracking-widest uppercase whitespace-nowrap">{t("hero_scenario_solution_label")}</span>
                  <h3 className="text-xl font-black text-white mt-1 leading-tight whitespace-nowrap">{t("hero_scenario_solution_title")}</h3>
                  <p className="text-sm text-white/60 mt-2 leading-relaxed whitespace-nowrap">{t("hero_scenario_solution_desc")}</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons with Shimmer：強制橫排，文字禁止換行 */}
            <div className="mt-10 flex flex-row flex-wrap gap-4">
              <button
                onClick={() => window.dispatchEvent(new Event("open-waitlist"))}
                className="group relative inline-flex h-[52px] items-center justify-center gap-2 overflow-hidden rounded-full bg-[#FF7A00] px-8 text-[15px] font-bold text-white shadow-[0_0_32px_rgba(255,122,0,0.35)] transition-all duration-200 hover:bg-[#FF9A33] active:scale-[0.98] whitespace-nowrap"
              >
                <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                  <span className="relative h-full w-8 bg-white/20" />
                </span>
                <span className="relative z-10 vgo-btn-text">{t("hero_cta_primary")}</span>
                <svg viewBox="0 0 24 24" className="relative z-10 w-4 h-4 stroke-current fill-none" strokeWidth={2.4} aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
              <Link
                href="/how-it-works/customer"
                className="inline-flex h-[52px] items-center justify-center rounded-full border border-white/20 px-8 text-[15px] font-medium text-white transition-all duration-200 hover:bg-white/10 active:scale-[0.98] whitespace-nowrap"
              >
                <span className="vgo-btn-text">{t("hero_cta_secondary")}</span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white/50 vgo-line-clamp-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#FF7A00] fill-none" strokeWidth={2}>
                  <path d="M12 2l8 4v6c0 5-3.4 8.8-8 10-4.6-1.2-8-5-8-10V6l8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
                {t("hero_proof_2")}
              </div>
              <div className="flex items-center gap-2 text-[12px] font-semibold text-white/50 vgo-line-clamp-1">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#FF7A00] fill-none" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v10M9.5 9.5h4a1.8 1.8 0 010 3.6h-3a1.8 1.8 0 000 3.6h4" />
                </svg>
                {t("hero_proof_3")}
              </div>
            </div>

            {/* 4 角色快速分流：網格自適應，空間足夠橫排，手機端一列 */}
            <motion.div {...rise(0.6)} className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-2">
              <Link
                href="/how-it-works/customer"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur transition-all hover:bg-white/10 hover:text-white whitespace-nowrap"
              >
                {t("cta_customer")}
              </Link>
              <Link
                href="/technician"
                className="inline-flex items-center gap-1.5 rounded-full border border-[#FF7A00]/30 bg-[#FF7A00]/10 px-4 py-2 text-[12px] font-semibold text-[#FF7A00] backdrop-blur transition-all hover:bg-[#FF7A00]/20 whitespace-nowrap"
              >
                {t("cta_tech")}
              </Link>
              <Link
                href="/merchant"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur transition-all hover:bg-white/10 hover:text-white whitespace-nowrap"
              >
                {t("cta_merchant")}
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[12px] font-semibold text-white/80 backdrop-blur transition-all hover:bg-white/10 hover:text-white whitespace-nowrap"
              >
                {t("nav_partner")}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Team image + floating glass card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="relative hidden lg:flex h-[600px] items-end justify-center"
          >
            {/* Team image */}
            <div className="relative w-full h-full max-w-[500px]">
              <Image
                src="/images/roles-transparent/vgo_team_group_4_transparent_v2.png"
                alt="VGO Technicians"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Floating glass card (3s float) */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={reduce ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -10, 0] }}
              transition={
                reduce
                  ? { duration: 0.8, delay: 0.8 }
                  : { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }
              }
              className="absolute bottom-12 left-0 rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md p-4 pr-6 shadow-[0_8px_32px_rgba(6,17,29,0.4)]"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF7A00] text-[15px] font-black text-white shadow-[0_0_20px_rgba(255,122,0,0.4)]">
                  4.9
                </div>
                <div>
                  <div className={`text-[14px] font-bold text-white leading-[${headingLh}]`}>
                    {t("trust_quality_title")}
                  </div>
                  <div className={`text-[12px] text-white/50 leading-[${bodyLh}]`}>
                    {t("trust_quality_desc")}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
