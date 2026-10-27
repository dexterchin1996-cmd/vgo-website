"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
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

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <main id="home" className="relative bg-[#06111d] overflow-x-hidden font-sans selection:bg-[#FF6600] selection:text-white">
        {/* HERO */}
        <section className="relative min-h-[100svh] flex flex-col justify-between overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#06111d]">
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
                className="text-[48px] sm:text-6xl md:text-[80px] leading-[1.05] font-black text-white tracking-tighter"
              >
                家里大小事，<br />
                <span className="text-[#FF6600]">一键搞定，师傅上门</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-10 max-w-md text-white/60 text-base leading-relaxed"
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
                <div className="relative w-full h-full">
                  <Image
                    src="https://images.unsplash.com/photo-1581539231347-a98787251e8b?w=900&q=80"
                    alt="VGO technician"
                    className="w-full h-full object-cover rounded-[2rem] shadow-2xl shadow-black/50 border border-white/10"
                    priority
                  />
                  <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-r from-[#FF6600] to-[#E55A00] -z-10 opacity-30 blur-xl" />
                </div>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 px-6 py-3 rounded-full bg-[#06111d]/90 backdrop-blur-xl border border-white/20 shadow-lg">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                  <span className="text-xs text-white font-semibold tracking-wide">师傅在线中 · 平均 30 分钟响应</span>
                </div>
              </motion.div>
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
