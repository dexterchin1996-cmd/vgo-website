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
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { useLang } from "@/lib/i18n";

export default function Home() {
  const { t } = useLang();

  return (
    <>
      <main id="home" className="relative bg-[#06111d] overflow-x-hidden font-sans selection:bg-[#FF6600] selection:text-white">
        {/* HERO — Next.js Image + Motion layout animation + fluid typography */}
        <Hero />

        {/* News Ticker — 橙色渐变背景 + marquee 滚动跑马灯 */}
        <NewsTicker />

        {/* Pain Point Wall — 滚动裁剪揭示 + 痛点卡片 */}
        <PainPointWall />

        {/* Feature Cards — Bento Grid 矩阵 + 滚动视差 */}
        <Reveal><FeatureCards /></Reveal>

        {/* Scene Showcase — 沉浸式场景叙事 */}
        <Reveal><SceneShowcase /></Reveal>

        {/* How It Works — 4 步流程 */}
        <Reveal><HowItWorks /></Reveal>

        {/* Pricing — 固定价 vs 报价制对比 */}
        <Reveal><Pricing /></Reveal>

        {/* Comparison — 传统找Provider vs V'GO 平台 5 维度对比 */}
        <Comparison />

        {/* Guarantees — 4 重平台保障 */}
        <Reveal><Guarantees /></Reveal>

        {/* Platform Trust — 实名审核 / 明码标价 / 完工验收 */}
        <PlatformTrust />

        {/* Testimonials — 6 条真实客户评价 */}
        <Reveal><Testimonials /></Reveal>

        {/* Roles — 三个角色入口 */}
        <Reveal><Roles /></Reveal>

        {/* Merchant — Merchant招募区 */}
        <Reveal><Merchant /></Reveal>

        {/* Cooperation — 合作模式 */}
        <Reveal><Cooperation /></Reveal>

        {/* FAQ — 常见问题 */}
        <Reveal><FAQ /></Reveal>

        {/* Final CTA — 橙色渐变强行动 */}
        <Reveal><FinalCTA /></Reveal>

        <AppLinks />
        <Footer />
        <Waitlist />
        <Notice />
      </main>
    </>
  );
}
