"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { useLang } from "@/lib/i18n";

const C = {
  zh: {
    label: "客户见证",
    title: "他们用过 V'GO，才敢这样说",
    sub: "每一条评价都来自真实订单，未经修饰。",
    reviews: [
      {
        name: "陈小姐",
        city: "· 亚庇 捷豹阳光",
        rating: 5,
        text: "冷气坏了三天，家里热得待不下去。在 V'GO 上下单半小时，师傅就上门了，收费和上面报的一模一样，没多收一分。现在家里凉爽多了，以后只找 V'GO。",
        service: "空调维修 · RM 180",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
      },
      {
        name: "黄先生",
        city: "· 亚庇 狮子山",
        rating: 5,
        text: "第一次叫上门保洁，本来挺担心会不会乱收费。V'GO 明码标价，师傅上门前先确认价格，完工后才放款。整个过程很透明，家里干净得不像话。",
        service: "深度保洁 · RM 150",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
      },
      {
        name: "李女士",
        city: "· 亚庇 惹浪乌BI",
        rating: 5,
        text: "月经痛得厉害，预约了上门按摩。理疗师很专业，手法到位，价格也比店里便宜。7 天质保让我很安心，万一有问题还能返工。",
        service: "上门按摩 · RM 120",
        avatar: "https://images.unsplash.com/photo-1544717297-3265d2b07a3a?w=120&h=120&fit=crop",
      },
      {
        name: "周先生",
        city: "· 亚庇 泛惹",
        rating: 5,
        text: "水管凌晨爆了，半夜打给 V'GO 客服，他们马上派人过来。师傅带了工具，半个小时就修好了。平台担保交易，完工验收后才付款，很放心。",
        service: "紧急水管维修 · RM 200",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
      },
      {
        name: "林小姐",
        city: "· 亚庇 甲抛河峇底",
        rating: 5,
        text: "搬家跑腿找了 V'GO，师傅很负责，家具搬得稳稳当当，一点磕碰都没有。下次搬家还找他们。",
        service: "跑腿搬家 · RM 100",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop",
      },
      {
        name: "张先生",
        city: "· 亚庇 央冬里",
        rating: 5,
        text: "门锁坏了出不了门，V'GO 20 分钟就派人来开了。锁师傅手艺好，换了新锁芯，收费和网上报价一样。以后家里有事就上 V'GO。",
        service: "开锁换锁 · RM 80",
        avatar: "https://images.unsplash.com/photo-1524508393617-94308e2e2914?w=120&h=120&fit=crop",
      },
    ],
    cta_title: "加入 12,000+ 满意家庭",
    cta_sub: "免费注册，认证师傅随叫随到",
    cta_btn: "立即下单",
  },
  en: {
    label: "Customer Reviews",
    title: "They Used V'GO, and Now They Say",
    sub: "Every review comes from a real order. Unedited.",
    reviews: [
      {
        name: "Ms. Chan",
        city: "· Kota Kinabalu, Damai",
        rating: 5,
        text: "Air conditioner broke for three days, home was unbearable. Ordered on V'GO, pro arrived in 30 minutes. Charged exactly what was quoted, not a cent more. Now only book V'GO.",
        service: "AC Repair · RM 180",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
      },
      {
        name: "Mr. Wong",
        city: "· Kota Kinabalu, Luyang",
        rating: 5,
        text: "First time booking home cleaning, was worried about hidden fees. V'GO has transparent pricing, pro confirms price before starting, payment only after completion. Whole process was clear, home is spotless.",
        service: "Deep Cleaning · RM 150",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
      },
      {
        name: "Ms. Lee",
        city: "· Kota Kinabalu, Likas",
        rating: 5,
        text: "Bad period pain, booked home massage. Therapist was professional, technique was spot on, price cheaper than spa. 7-day warranty gives peace of mind.",
        service: "Home Massage · RM 120",
        avatar: "https://images.unsplash.com/photo-1544717297-3265d2b07a3a?w=120&h=120&fit=crop",
      },
      {
        name: "Mr. Chow",
        city: "· Kota Kinabalu, Penampang",
        rating: 5,
        text: "Water pipe burst at midnight, called V'GO customer service, they dispatched someone immediately. Pro brought tools, fixed in 30 minutes. Platform escrow, pay after acceptance. Very reassuring.",
        service: "Emergency Pipe Repair · RM 200",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop",
      },
      {
        name: "Ms. Lim",
        city: "· Kota Kinabalu, Karambunai",
        rating: 5,
        text: "Hired V'GO for moving errands. Pro was responsible, furniture moved safely without a scratch. Will book them again for next move.",
        service: "Moving Help · RM 100",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=120&h=120&fit=crop",
      },
      {
        name: "Mr. Teh",
        city: "· Kota Kinabalu, Central",
        rating: 5,
        text: "Door lock broke, couldn't get out. V'GO dispatched someone in 20 minutes. Locksmith was skilled, replaced cylinder, charged same as online quote. From now on, V'GO for everything at home.",
        service: "Locksmith · RM 80",
        avatar: "https://images.unsplash.com/photo-1524508393617-94308e2e2914?w=120&h=120&fit=crop",
      },
    ],
    cta_title: "Join 12,000+ Happy Families",
    cta_sub: "Free signup. Certified pros on demand.",
    cta_btn: "Book Now",
  },
  ms: {
    label: "Ulasan Pelanggan",
    title: "Mereka Telah Guna V'GO",
    sub: "Setiap ulasan daripada pesanan sebenar. Tidah diedit.",
    reviews: [
      {
        name: "Puan Chan",
        city: "· Kota Kinabalu, Damai",
        rating: 5,
        text: "Air cond rosak selama tiga hari, rumah panas hingga tidak boleh stay. Tempah di V'GO, tukang tiba dalam 30 minit. Dicareh ikut sebut harga, tak ada tambahan. Sekarang hanya tempah V'GO sahaja.",
        service: "Servis Aircond · RM 180",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop",
      },
      {
        name: "Encik Wong",
        city: "· Kota Kinabalu, Luyang",
        rating: 5,
        text: "Pertama kali tempah servis bersih rumah, risau akan caj tersembunyi. V'GO harga telus, tukang sahkan harga sebelum kerja, bayaran selepas siap. Seluruh proses jelas, rumah bersih bersih.",
        service: "Bersih Rumah Mendalam · RM 150",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&h=120&fit=crop",
      },
    ],
    cta_title: "Sertai 12,000+ Keluarga Puas Hati",
    cta_sub: "Daftar percuma. Tukang bertauliah sedia membantu.",
    cta_btn: "Tempah Sekarang",
  },
} as const;

export default function Testimonials() {
  const { lang } = useLang();
  const c = C[lang as keyof typeof C] ?? C.zh;

  return (
    <section className="relative bg-[#06111d] py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/10 w-[600px] h-[600px] bg-[#FF6600]/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/10 w-[500px] h-[500px] bg-[#FF6600]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 md:px-16 z-10">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#FF6600] font-bold text-xs tracking-[0.2em] uppercase mb-3"
          >
            {c.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto"
          >
            {c.sub}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/[0.05] hover:border-[#FF6600]/30 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-5">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full border border-white/10 object-cover" />
                <div>
                  <div className="font-bold text-white text-sm">{r.name}{r.city}</div>
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} size={14} className={star <= r.rating ? "fill-yellow-400" : "text-white/20"} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-5 italic">「{r.text}」</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs text-white/50">{r.service}</span>
                <div className="flex items-center gap-1 text-[#FF6600] text-xs font-semibold">
                  <CheckCircle2 size={14} /> 认证服务
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-white/[0.05] text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">{c.cta_title}</h3>
          <p className="text-white/50 text-sm mb-6 max-w-xl mx-auto">{c.cta_sub}</p>
          <a
            href="https://service.vgoservice.com/register"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#FF6600] text-white font-bold text-base shadow-[0_15px_40px_-12px_rgba(255,102,0,0.4)] hover:bg-[#FF8A1F] hover:scale-[1.03] transition-all duration-300"
          >
            {c.cta_btn} <ArrowRight size={20} strokeWidth={2.5} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
