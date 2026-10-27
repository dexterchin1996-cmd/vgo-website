"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useEffect, useState } from "react";
import NewsTicker from "@/components/NewsTicker";
import PainPointWall from "@/components/PainPointWall";
import FeatureCards from "@/components/FeatureCards";
import SceneShowcase from "@/components/SceneShowcase";
import HowItWorks from "@/components/HowItWorks";
import Guarantees from "@/components/Guarantees";
import PlatformTrust from "@/components/PlatformTrust";
import Roles from "@/components/Roles";
import Merchant from "@/components/Merchant";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Comparison from "@/components/Comparison";
import Cooperation from "@/components/Cooperation";
import FinalCTA from "@/components/FinalCTA";
import AppLinks from "@/components/AppLinks";
import Footer from "@/components/Footer";
import Waitlist from "@/components/Waitlist";
import Notice from "@/components/Notice";
import Reveal from "@/components/Reveal";
import { useLang } from "@/lib/i18n";
import { ArrowRight, Clock, ShieldCheck, User, AlertCircle, CheckCircle2 } from "lucide-react";

// ══════════════════════════════════════════════════════════════════════
// Lead Magnet — CRO: 免费 RM80 上门检查券，强行动呼唤
// ══════════════════════════════════════════════════════════════════════
const LEAD_MAGNET: Record<string, { title: string; desc: string; btn: string }> = {
  zh: {
    title: "注册即送 RM80 上门检查券",
    desc: "新用户专享，首次维修/清洁立减 RM80，名额有限，先到先得。",
    btn: "领取券并下载 App",
  },
  en: {
    title: "Get RM80 Home Check Voucher on Signup",
    desc: "New users only — RM80 off your first repair or cleaning. Limited slots, first come first served.",
    btn: "Claim Voucher & Download App",
  },
  ms: {
    title: "Dapatkan Baucer RM80 Semula Daftar",
    desc: "Pengguna baharu sahaja — RM80 potongan untuk pembaikan/pembersihan pertama. Kuotanya terbatas.",
    btn: "Tangkap Baucer & Muat Turun App",
  },
};

export default function Home() {
  const { t, lang } = useLang();
  const lm = LEAD_MAGNET[lang] ?? LEAD_MAGNET.zh;

  // ═════════════════════════════════════════════════════════════════════
  // Parallax Scrolling — scroll-linked transform (Intersection Observer style)
  // ═════════════════════════════════════════════════════════════════════
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setParallaxOffset(window.scrollY * 0.4);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <main id="home" className="relative bg-[#06111d] overflow-x-hidden font-sans selection:bg-[#FF6600] selection:text-white">
        {/* HERO — Next.js Image + Motion layout + parallax + fluid typography */}
        <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#06111d]">
            <div
              className="parallax-layer absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581539231347-a98787251e8b?q=80&w=2000')] bg-cover bg-center opacity-25"
              style={{ transform: `translateY(${parallaxOffset}px)` }}
            />
            <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#FF6600]/8 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#FF6600]/5 rounded-full blur-[140px] pointer-events-none" />
          </div>

          <div className="pt-32 md:pt-40 pb-20" />
          <div className="relative z-10 max-w-[1350px] mx-auto w-full px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center flex-1">
            <div className="w-full text-left relative z-20">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 mb-12 text-[#FF6600] text-xs font-bold tracking-[0.3em] uppercase"
              >
                <span className="w-8 h-px bg-[#FF6600]" />
                V'GO Malaysia · 认证上门服务平台
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="fluid-heading-1 font-black text-white tracking-tighter"
              >
                家里大小事，<br />
                <span className="text-[#FF6600]">一键搞定，师傅上门</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 max-w-md fluid-body-lg text-white/60 leading-relaxed"
              >
                <p className="text-white/90 font-semibold text-lg mb-3">马来西亚认证上门服务平台</p>
                <p>
                  居家维修 · 空调清洗 · 保洁 · 按摩 · 跑腿 · 二手商城 · 找工作。{" "}
                  <span className="text-[#FF6600] font-bold">平台担保交易 · 先报价后开工 · 7 天质保</span>，{" "}
                  认证师傅随叫随到。
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6"
              >
                <Link
                  href="/customer"
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-[#FF6600] text-white font-black text-lg shadow-[0_20px_50px_-15px_rgba(255,102,0,0.5)] hover:bg-[#FF8A1F] hover:scale-[1.03] active:scale-95 transition-all duration-300"
                >
                  立即下载 App <span className="text-xl">→</span>
                </Link>
                <Link
                  href="/services/repair/"
                  className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-white/[0.06] border border-white/10 text-white font-bold text-base hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                >
                  浏览所有服务 <span className="text-lg">↓</span>
                </Link>
              </motion.div>
            </div>

            <div className="w-full relative flex justify-center md:justify-end z-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
                className="relative w-full max-w-[560px] aspect-[4/5] flex items-end justify-center"
              >
                <Image
                  src="https://images.unsplash.com/photo-1581539231347-a98787251e8b?w=900&q=80"
                  alt="VGO certified technician arriving at customer home"
                  width={900}
                  height={1125}
                  priority
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-black/50 border border-white/10"
                  placeholder="empty"
                />
                <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-r from-[#FF6600] to-[#E55A00] -z-10 opacity-30 blur-xl" />
              </motion.div>
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-full bg-[#06111d]/90 backdrop-blur-xl border border-white/20 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-xs text-white font-semibold tracking-wide">师傅在线中 · 平均 30 分钟响应</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 w-full border-t border-white/[0.06]">
            <div className="max-w-[1350px] mx-auto px-6 md:px-16 py-8 flex overflow-x-auto md:justify-between items-center gap-10 scrollbar-hide">
              {[
                { icon: "shield", title: "平台担保", desc: "完工验收后放款" },
                { icon: "search", title: "快速响应", desc: "30分钟内接单" },
                { icon: "user", title: "实名认证", desc: "师傅背景审查" },
                { icon: "calendar", title: "价格透明", desc: "明码标价 · 无隐藏费用" },
                { icon: "chat", title: "7x24客服", desc: "随时在线解答" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 shrink-0 group">
                  <img
                    src={`/icons/${item.icon}.svg`}
                    alt={item.title}
                    className="w-5 h-5 opacity-40 group-hover:opacity-100 transition-opacity"
                  />
                  <div>
                    <div className="text-white/85 font-semibold text-[13px] tracking-wide whitespace-nowrap">{item.title}</div>
                    <div className="text-white/35 text-[11px] whitespace-nowrap mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="relative z-10 py-24 sm:py-32 px-5 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6600]/10 via-transparent to-[#FF6600]/10" />
          <div className="relative max-w-5xl mx-auto px-6 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-[2rem] bg-gradient-to-br from-[#FF6600] to-[#E55A00] p-8 sm:p-12 md:p-16 text-center shadow-[0_25px_60px_-15px_rgba(255,102,0,0.35)] border border-white/10"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between sm:justify-center gap-6 md:gap-10">
                <div className="sm:text-left mb-6 sm:mb-0">
                  <p className="text-white/90 font-black text-sm tracking-[0.2em] uppercase mb-2">限时福利</p>
                  <h2 className="fluid-heading-2 font-black text-white">{lm.title}</h2>
                  <p className="text-white/80 text-sm sm:text-base mt-3">{lm.desc}</p>
                </div>
                <a
                  href="https://service.vgoservice.com/register"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-white text-[#E55A00] font-black text-base shadow-2xl hover:bg-[#FFB33D] hover:scale-[1.03] active:scale-95 transition-all duration-300"
                >
                  {lm.btn} <ArrowRight size={20} strokeWidth={2.5} />
                </a>
              </div>
              <div className="mt-8 sm:mt-0 flex flex-col sm:flex-row items-center sm:justify-center gap-4 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <Clock size={12} /> 有效期 30 天
                </div>
                <div className="w-px h-4 bg-white/30" />
                <div className="flex items-center gap-2">
                  <ShieldCheck size={12} /> 平台担保
                </div>
                <div className="w-px h-4 bg-white/30" />
                <div className="flex items-center gap-2">
                  <User size={12} /> 新用户专享
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Before & After — 营销心理学：前后对比视觉冲击，信任背书 */}
        <section className="relative z-10 py-24 sm:py-32 px-5 overflow-hidden bg-[#0a0f18]">
          <div className="relative max-w-4xl mx-auto px-6 md:px-16">
            <div className="text-center mb-16">
              <p className="text-[#FF6600] font-bold text-xs tracking-[0.2em] uppercase mb-3">平台差异</p>
              <h2 className="fluid-heading-2 font-black text-white tracking-tight">传统找师傅 vs V'GO 平台</h2>
              <p className="mt-4 text-white/50 text-sm sm:text-base">同一次家电维修，两种截然不同的体验。平台担保、先报价、7 天质保，全程透明可控。</p>
            </div>

            <div className="relative ba-slider group">
              <div className="ba-slider__before">
                <Image
                  src="https://images.unsplash.com/photo-1581539231347-a98787251e8b?w=1200&q=80"
                  alt="Before: traditional messy service"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover kb-zoom-in"
                  sizes="(max-width: 768px) 100vw, 480px"
                  priority
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <span className="text-white/70 font-bold text-lg">传统找师傅<br />不明报价 · 可能放鸽子 · 无质保</span>
                </div>
              </div>
              <div className="ba-slider__after">
                <Image
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?w=1200&q=80"
                  alt="After: VGO professional service"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover kb-zoom-out"
                  sizes="(max-width: 768px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-[#06111d]/60 flex items-center justify-center">
                  <span className="text-[#FF6600]/90 font-bold text-lg">V'GO 平台<br />先报价后开工 · 准时上门 · 7 天质保</span>
                </div>
              </div>
              <div className="ba-slider__handle">→</div>
            </div>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 gap-4 text-center">
              <div className="p-6 rounded-2xl bg-[#06111d]/30 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mx-auto mb-3">
                  <AlertCircle size={20} className="text-red-400" />
                </div>
                <h3 className="font-bold text-white text-sm">传统模式</h3>
                <ul className="text-xs text-white/50 mt-2 space-y-1">
                  <li>· 师傅身份不明</li>
                  <li>· 现场随意报价</li>
                  <li>· 可能放鸽子</li>
                  <li>· 无质保无售后</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-[#06111d]/50 border border-[#FF6600]/30">
                <div className="w-10 h-10 rounded-xl bg-[#FF6600]/10 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 size={20} className="text-[#FF6600]" />
                </div>
                <h3 className="font-bold text-white text-sm">V'GO 平台</h3>
                <ul className="text-xs text-white/50 mt-2 space-y-1">
                  <li>· 实名认证师傅</li>
                  <li>· 先报价后开工</li>
                  <li>· 准时上门</li>
                  <li>· 7 天质保</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <NewsTicker />
        <PainPointWall />
        <Reveal><FeatureCards /></Reveal>
        <Reveal><SceneShowcase /></Reveal>
        <Reveal><HowItWorks /></Reveal>
        <Comparison />
        <Reveal><Guarantees /></Reveal>
        <PlatformTrust />
        <Reveal><Testimonials /></Reveal>
        <Reveal><Roles /></Reveal>
        <Reveal><Merchant /></Reveal>
        <Reveal><Cooperation /></Reveal>
        <Reveal><FAQ /></Reveal>
        <Reveal><FinalCTA /></Reveal>
        <AppLinks />
        <Footer />
        <Waitlist />
        <Notice />
      </main>
    </>
  );
}
