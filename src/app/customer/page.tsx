"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useLang } from "@/lib/i18n";
import {
  ShieldCheck,
  Clock,
  Wallet,
  Headphones,
  Award,
  CheckCircle2,
  ArrowRight,
  User,
  Phone,
  MapPin,
  RefreshCw,
  Flame,
} from "lucide-react";

const C = {
  zh: {
    tag: "客户专属",
    hero_t: "有事不用愁，",
    hero_t2: "上门找 V'GO",
    hero_s: "平台担保交易 · 先报价后开工 · 7 天质保 · 认证师傅随叫随到",
    hero_cta: "立即下载 App",
    hero_cta2: "浏览服务",
    trust_label: "平台四重保障",
    trust_title: "为什么选 V'GO 下单",
    trust_sub: "我们把每一项顾虑都变成了平台承诺",
    guarantees: [
      {
        icon: ShieldCheck,
        title: "平台担保交易",
        desc: "款项先进入平台托管账户，完工验收满意后才放款，客户无法直接拖欠。",
      },
      {
        icon: Clock,
        title: "先报价后开工",
        desc: "师傅上门前给出最终价格，你同意才开工，绝无临时加价或隐藏费用。",
      },
      {
        icon: RefreshCw,
        title: "7 天质保",
        desc: "服务完工后 7 天内如出现同类问题，可申请免费返工或全额退款。",
      },
      {
        icon: User,
        title: "实名认证师傅",
        desc: "所有师傅通过身份验证、技能考核与背景审查，平台全程记录服务过程。",
      },
    ],
    pain_label: "客户最担心什么",
    pain_title: "这些烦恼，V'GO 全部打掉",
    pain_sub: "上门服务行业的痛点，我们一个不落地解决",
    pains: [
      {
        icon: Flame,
        title: "怕被坑 / 临时加价",
        solution: "平台明码标价，师傅上门前给出最终报价，你同意才开工，无隐藏费用。",
      },
      {
        icon: Phone,
        title: "怕不安全 / 师傅靠不靠谱",
        solution: "所有师傅实名认证 + 背景审查 + 技能考核，服务全程可追踪，可投诉。",
      },
      {
        icon: MapPin,
        title: "怕预约了不来 / 放鸽子",
        solution: "系统智能派单，师傅不到按时上门，平台介入处理并可申请退款。",
      },
      {
        icon: Wallet,
        title: "怕付款不透明 / 纠纷难解",
        solution: "平台担保交易，完工验收后放款，7 天内可申请返工或全额退款。",
      },
    ],
    how_label: "怎么下单",
    how_title: "4 步搞定，比你想象的更简单",
    steps: [
      { n: "01", t: "下载 App", d: "浏览器直接安装，无需应用商店，30 秒搞定" },
      { n: "02", t: "选服务", d: "挑维修、清洁、按摩、跑腿等 30+ 类目，看明码标价" },
      { n: "03", t: "下单预约", d: "填地址和时间，一键下单，系统派附近认证师傅" },
      { n: "04", t: "师傅上门", d: "实时看到师傅位置，完工验收满意后平台放款" },
    ],
    services_label: "我们的服务",
    services_title: "V'GO 能帮你做什么",
    services_sub: "30+ 服务类目，覆盖生活方方面面",
    services: [
      { icon: "🔧", t: "居家维修", d: "水管 · 电路 · 家电 · 锁具", href: "/services/repair/" },
      { icon: "🧼", t: "清洁打扫", d: "家庭保洁 · 深度清洁 · 空调清洗", href: "/services/clean/" },
      { icon: "💆", t: "按摩理疗", d: "上门按摩 · 中医理疗 · 足疗", href: "/services/massage/" },
      { icon: "🚚", t: "跑腿代购", d: "同城配送 · 购物代购 · 排队代办", href: "/services/errand/" },
      { icon: "🛒", t: "二手商城", d: "闲置交易 · 本地买卖", href: "/services/market/" },
      { icon: "💼", t: "找工作", d: "零工招聘 · 兼职机会", href: "/services/jobs/" },
    ],
    cta_label: "准备好了吗？",
    cta_t: "家里大小事，",
    cta_t2: "上门找 V'GO",
    cta_s: "免费注册，认证师傅随叫随到",
    cta_btn: "免费下载 App",
    cta_note: "iOS · Android · 浏览器直接安装，无需应用商店",
    faq_label: "常见问题",
    faq_title: "客户最关心的问题",
    faqs: [
      ["V'GO 是什么服务？覆盖哪些地区？", "V'GO 是马来西亚上门生活服务平台，提供维修、清洁、按摩、跑腿、二手交易、招工等服务。当前从沙巴起步，逐步覆盖全马主要城市。"],
      ["价格怎么算？会不会有隐藏费用？", "下单时页面会给出报价，平台按服务项目与时长计价。师傅上门确认后给出最终价格，你同意才开工，没有隐藏费用。"],
      ["师傅有认证吗？安全吗？", "有。所有师傅入驻前需通过身份验证、技能审核与背景调查。服务过程全程记录，平台可追溯。"],
      ["怎么付款？安全吗？", "支持线下 DuitNow 扫码或转账：付款后上传凭证，平台人工核对后确认收款，金额不符会被系统拦下。"],
      ["可以退款吗？", "可以。如果师傅未按时上门，或服务未完成，可申请全额退款。平台在 1-3 个工作日内处理。"],
      ["服务不满意怎么办？", "服务完工后 7 天内如出现同类问题，可申请免费返工或全额退款。"],
    ],
  },
  en: {
    tag: "For Customers",
    hero_t: "Whatever you need,",
    hero_t2: "V'GO takes the lead",
    hero_s: "Platform escrow · Quote before work · 7-day warranty · Certified pros on demand",
    hero_cta: "Download App",
    hero_cta2: "Browse Services",
    trust_label: "Four Platform Guarantees",
    trust_title: "Why Book with V'GO",
    trust_sub: "We turn every concern into a platform promise",
    guarantees: [
      {
        icon: ShieldCheck,
        title: "Platform Escrow",
        desc: "Funds are held in platform custody until you accept the completed job — no default risk.",
      },
      {
        icon: Clock,
        title: "Quote Before Work",
        desc: "The pro gives you the final price before starting. You agree — then work begins. No surprise fees.",
      },
      {
        icon: RefreshCw,
        title: "7-Day Warranty",
        desc: "Same issue within 7 days after completion? Free redo or full refund.",
      },
      {
        icon: User,
        title: "Verified Professionals",
        desc: "Every pro passes ID verification, background check, and skill assessment. Service is fully recorded.",
      },
    ],
    pain_label: "What Customers Worry About",
    pain_title: "V'GO Eliminates Every Pain",
    pain_sub: "Every on-service industry pain point, solved — none left behind",
    pains: [
      {
        icon: Flame,
        title: "Fear of scams / surprise charges",
        solution: "Transparent platform pricing. The pro quotes the final price before work. You agree — then work begins. No hidden fees.",
      },
      {
        icon: Phone,
        title: "Safety / unverified pros",
        solution: "All pros pass ID verification, background checks, and skill assessments. Service is trackable and reportable.",
      },
      {
        icon: MapPin,
        title: "No-shows / flaky pros",
        solution: "Smart dispatch system. If the pro doesn't show up on time, the platform intervenes and you can request a refund.",
      },
      {
        icon: Wallet,
        title: "Unclear payments / hard disputes",
        solution: "Platform escrow — payment released after you accept the job. 7-day redo or full refund window.",
      },
    ],
    how_label: "How to Book",
    how_title: "4 Steps. Simpler Than You Think.",
    steps: [
      { n: "01", t: "Download App", d: "Install from browser — no app store needed. 30 seconds flat." },
      { n: "02", t: "Choose Service", d: "Pick repair, cleaning, massage, errands, and 30+ categories with clear prices." },
      { n: "03", t: "Book", d: "Enter address and time. One tap to order. System dispatches a nearby certified pro." },
      { n: "04", t: "Pro Arrives", d: "Track the pro in real time. Platform releases payment after you accept the completed job." },
    ],
    services_label: "Our Services",
    services_title: "Everything Your Home Needs",
    services_sub: "30+ services covering every corner of life",
    services: [
      { icon: "🔧", t: "Home Repair", d: "Plumbing · Electrical · Appliances · Locks", href: "/services/repair/" },
      { icon: "🧼", t: "Cleaning", d: "Housekeeping · Deep Clean · Aircon Service", href: "/services/clean/" },
      { icon: "💆", t: "Massage", d: "Home Massage · Therapy · Foot Reflex", href: "/services/massage/" },
      { icon: "🚚", t: "Errands", d: "Same-Day Delivery · Shopping · Queuing", href: "/services/errand/" },
      { icon: "🛒", t: "Marketplace", d: "Second-Hand · Local Buy & Sell", href: "/services/market/" },
      { icon: "💼", t: "Jobs", d: "Gig Work · Part-Time", href: "/services/jobs/" },
    ],
    cta_label: "Ready to Start?",
    cta_t: "One Tap Away,",
    cta_t2: "V'GO's On The Way",
    cta_s: "Free to sign up. Certified pros on demand.",
    cta_btn: "Download App Free",
    cta_note: "iOS · Android · Install from browser — no app store",
    faq_label: "FAQ",
    faq_title: "What Customers Ask Most",
    faqs: [
      ["What is V'GO? Which areas are covered?", "V'GO is a Malaysia home-service platform offering repair, cleaning, massage, errands, second-hand trading, and job listings. Starting from Sabah, expanding to major cities nationwide."],
      ["How is pricing calculated? Any hidden fees?", "You see a quote before ordering. The pro confirms the final price on-site. Work starts only after you agree — no hidden fees."],
      ["Are pros certified? Is it safe?", "Yes. All pros pass ID verification, skill assessment, and background checks before joining. Every service is fully recorded."],
      ["How do I pay? Is it safe?", "Pay via DuitNow QR or bank transfer. Upload proof, platform verifies, then confirms. Mismatched amounts are flagged by the system."],
      ["Can I get a refund?", "Yes. If the pro doesn't show up on time or service isn't completed, request a full refund. Processed within 1-3 business days."],
      ["Not satisfied with the service?", "Within 7 days after completion, same-issue problems qualify for free redo or full refund."],
    ],
  },
  ms: {
    tag: "Untuk Pelanggan",
    hero_t: "Ada hal?",
    hero_t2: "V'GO Sedia Datang",
    hero_s: "Jaminan Platform · Sebut Harga Sebelum Kerja · Jaminan 7 Hari · Tukang Bertauliah Sedia Membantu",
    hero_cta: "Muat Turun App",
    hero_cta2: "Lihat Perkhidmatan",
    trust_label: "Empat Jaminan Platform",
    trust_title: "Mengapa Tempah dengan V'GO",
    trust_sub: "Kami ubah setiap kebimbangan menjadi janji platform",
    guarantees: [
      {
        icon: ShieldCheck,
        title: "Jaminan Platform",
        desc: "Dana disimpan dalam akaun amanah sehingga anda terima kerja yang siap — tiada risiko gagal bayar.",
      },
      {
        icon: Clock,
        title: "Sebut Harga Sebelum Kerja",
        desc: "Tukang memberikan harga akhir sebelum mula kerja. Anda setuju, baru kerja bermula. Tiada caj tersurprise.",
      },
      {
        icon: RefreshCw,
        title: "Jaminan 7 Hari",
        desc: "Masalah sama dalam 7 hari selepas siap? Tambah kerja percuma atau bayaran balik penuh.",
      },
      {
        icon: User,
        title: "Tukang Bertauliah",
        desc: "Setiap tukang lulus pengesahan identiti, pemeriksaan latar belakang, dan penilaian kemahiran. Setiap perkhidmatan direkod sepenuhnya.",
      },
    ],
    pain_label: "Apa Yang Pelanggan Bimbangkan",
    pain_title: "V'GO Atasi Setiap Risau",
    pain_sub: "Setiap titik lemah perkhidmatan, diselesaikan — tiada yang tertinggal",
    pains: [
      {
        icon: Flame,
        title: "Takut kena tipu / caj tersurprise",
        solution: "Harga platform telus. Tukang berikan harga akhir sebelum kerja. Anda setuju, baru bermula. Tiada caj tersembunyi.",
      },
      {
        icon: Phone,
        title: "Keselamatan / tukang tidak disahkan",
        solution: "Semua tukang lulus pengesahan ID, pemeriksaan latar belakang, dan ujian kemahiran. Perkhidmatan boleh dilaporkan dan dilacak.",
      },
      {
        icon: MapPin,
        title: "Tukang tidak datang / janji kosong",
        solution: "Sistem pengagihan pintas. Jika tukang tak datang tepat masa, platform campur tangan dan anda boleh minta bayaran balik.",
      },
      {
        icon: Wallet,
        title: "Bayaran tidak jelas / perselisihan susah",
        solution: "Jaminan platform — pembayaran dilepaskan selepas anda terima kerja. Jaminan 7 hari tambah kerja atau bayaran balik penuh.",
      },
    ],
    how_label: "Cara Tempah",
    how_title: "4 Langkah. Lebih Mudah daripada yang Diraka.",
    steps: [
      { n: "01", t: "Muat Turun App", d: "Pasang dari browser — tak perlu app store. 30 saat siap." },
      { n: "02", t: "Pilih Perkhidmatan", d: "Pilih pembaikan, pembersihan, urutan, penghantaran, dan 30+ kategori dengan harga jelas." },
      { n: "03", t: "Tempah", d: "Masukkan alamat dan masa. Tempah satu tap. Sistem hantar tukang bertauliah berdekatan." },
      { n: "04", t: "Tukang Sampai", d: "Lacak tukang secara masa nyata. Platform lepaskan bayaran selepas anda terima kerja yang siap." },
    ],
    services_label: "Perkhidmatan Kami",
    services_title: "Semua Keperluan Rumah Anda",
    services_sub: "30+ perkhidmatan meliputi setiap sudut kehidupan",
    services: [
      { icon: "🔧", t: "Pembaikan Rumah", d: "Paip · Elektrik · Peralatan · Kunci", href: "/services/repair/" },
      { icon: "🧼", t: "Pembersihan", d: "Bersih Rumah · Cuci Mendalam · Servis Aircond", href: "/services/clean/" },
      { icon: "💆", t: "Urutan", d: "Urutan ke Rumah · Terapi · Reflex", href: "/services/massage/" },
      { icon: "🚚", t: "Penghantaran", d: "Hantar Same-Day · Belanja · Antri", href: "/services/errand/" },
      { icon: "🛒", t: "Pasar Terpakai", d: "Barang Terpakai · Jual Beli Tempatan", href: "/services/market/" },
      { icon: "💼", t: "Cari Kerja", d: "Kerja Sambilan · Waktu Penuh", href: "/services/jobs/" },
    ],
    cta_label: "Sedia Mula?",
    cta_t: "Satu Tap,",
    cta_t2: "V'GO Sedia",
    cta_s: "Daftar percuma. Tukang bertauliah sedia membantu.",
    cta_btn: "Muat Turun App Percuma",
    cta_note: "iOS · Android · Pasang dari browser — tak perlu app store",
    faq_label: "Soalan Lazim",
    faq_title: "Apa yang Pelanggan Tanya Paling Banyak",
    faqs: [
      ["Apa itu V'GO? Kawasan mana yang diliputi?", "V'GO ialah platform perkhidmatan ke rumah Malaysia yang menawarkan pembaikan, pembersihan, urutan, penghantaran, jual beli terpakai, dan permohonan kerja. Bermula di Sabah, meluaskan ke bandar utama seeluruh negara."],
      ["Macammana harga dikira? Ada caj tersembunyi?", "Anda lihat sebut harga sebelum tempah. Tukang sahkan harga akhir di lokasi. Kerja bermula selepas anda setuju — tiada caj tersembunyi."],
      ["Tukang ada pensijilan? Selamat ka?", "Ada. Semua tukang lulus pengesahan ID, penilaian kemahiran, dan pemeriksaan latar belakang sebelum sertai. Setiap perkhidmatan direkod sepenuhnya."],
      ["Macammana bayar? Selamat ka?", "Bayar melalui DuitNow QR atau transfer bank. Muat naik bukti, platform semak, kemudian sahkan. Jumlah tidak sepadan akan ditandai sistem."],
      ["Boleh dapat bayaran balik?", "Boleh. Jika tukang tak datang tepat masa atau perkhidmatan tidak siap, minta bayaran balik penuh. Diproses dalam 1-3 hari bekerja."],
      ["Tak puas hati dengan perkhidmatan?", "Dalam 7 hari selepas siap, masalah sama layak untuk tambah kerja percuma atau bayaran balik penuh."],
    ],
  },
};

export default function CustomerPage() {
  const { lang } = useLang();
  const c = C[lang as keyof typeof C] ?? C.zh;

  return (
    <main className="relative min-h-screen bg-[#06111d] text-white overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-[85svh] flex items-center justify-center px-5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/shared/s01.jpg')" }} />
          <div className="absolute inset-0 bg-gradient-to-b from-[#06111d]/20 via-[#06111d]/60 to-[#06111d]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center pt-20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs font-semibold mb-6"
          >
            <ShieldCheck size={14} /> {c.tag}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black leading-[1.1] tracking-tight"
          >
            <span className="text-white">{c.hero_t}</span><br />
            <span className="text-[#FF6600]">{c.hero_t2}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-sm sm:text-base text-white/70 max-w-xl mx-auto leading-relaxed"
          >
            {c.hero_s}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://service.vgoservice.com/register"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-gradient-to-b from-[#FF6600] via-[#E55A00] to-[#B44A00] text-white font-black text-base shadow-[0_15px_40px_-10px_rgba(255,102,0,0.4)] hover:scale-[1.02] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]"
            >
              {c.hero_cta} <ArrowRight size={20} strokeWidth={2.5} />
            </a>
            <a
              href="/services/repair/"
              className="inline-flex items-center gap-2 px-10 py-5 rounded-2xl bg-white/10 border border-white/20 text-white font-bold text-base hover:bg-white/5 hover:scale-[1.02] transition-[transform,box-shadow,opacity,width,background-color]"
            >
              {c.hero_cta2}
            </a>
          </motion.div>
        </div>
      </section>

      {/* TRUST / GUARANTEES */}
      <section id="trust" className="relative z-10 py-20 sm:py-28 px-5 overflow-hidden">
        <div className="absolute top-0 left-1/10 w-[600px] h-[600px] bg-[#FF6600]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">{c.trust_label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{c.trust_title}</h2>
            <p className="mt-4 text-white/50 text-sm sm:text-base max-w-2xl mx-auto">{c.trust_sub}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.guarantees.map((g, i) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:border-[#FF6600]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(255,102,0,0.15)] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF6600] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:bg-[#FF6600]/10 group-hover:scale-110 transition-all duration-500">
                  <g.icon className="w-7 h-7 text-[#FF6600]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{g.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="relative bg-[#0a0f18] py-20 sm:py-28 px-5 overflow-hidden">
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">{c.pain_label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{c.pain_title}</h2>
            <p className="mt-4 text-white/50 text-sm sm:text-base">{c.pain_sub}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.pains.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 items-start p-6 rounded-3xl border border-white/5 bg-[#06111d]/30 hover:border-white/10 hover:bg-[#06111d]/50 transition-all"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#06111d] border border-[#FF6600]/30 flex items-center justify-center">
                  <p.icon size={22} strokeWidth={2.2} className="text-[#FF6600]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-base mb-1">{p.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative z-10 py-20 sm:py-28 px-5 overflow-hidden">
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">{c.how_label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{c.how_title}</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {c.steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 rounded-3xl bg-white/[0.02] border border-white/5"
              >
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FF6600] to-[#E55A00] flex items-center justify-center font-black text-xl shadow-[0_10px_30px_-10px_rgba(255,102,0,0.3)]">
                  {s.n}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-white text-lg mb-1">{s.t}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative bg-[#0a0f18] py-20 sm:py-28 px-5 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">{c.services_label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{c.services_title}</h2>
            <p className="mt-4 text-white/50 text-sm sm:text-base">{c.services_sub}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {c.services.map((svc, i) => (
              <motion.div
                key={svc.t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-6 rounded-3xl border border-white/5 bg-[#06111d]/30 hover:border-[#FF6600]/30 hover:bg-[#06111d]/50 transition-all cursor-pointer group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">{svc.icon}</div>
                <h3 className="font-bold text-white text-lg mb-2">{svc.t}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{svc.d}</p>
                <Link
                  href={svc.href}
                  className="mt-4 inline-flex items-center gap-1 text-[#FF6600] text-xs font-bold hover:text-[#FF8A1F] transition-colors"
                >
                  去看看 <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="relative z-10 py-24 sm:py-32 px-5 overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[40px] bg-gradient-to-br from-[#FF6600] to-[#B44A00] p-8 sm:p-12 text-center relative overflow-hidden shadow-[0_25px_60px_-15px_rgba(255,102,0,0.35)]"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(255,255,255,.2), transparent 70%)" }} />
            <div className="relative">
              <p className="text-white/90 font-bold text-sm tracking-widest uppercase mb-3">{c.cta_label}</p>
              <h2 className="text-2xl sm:text-4xl font-black text-white mb-4 leading-tight">
                {c.cta_t}<br />
                <span className="text-white">{c.cta_t2}</span>
              </h2>
              <p className="text-sm text-white/85 mb-8 max-w-md mx-auto">{c.cta_s}</p>
              <a
                href="https://service.vgoservice.com/register"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-white text-[#B44A00] font-black text-base shadow-2xl hover:scale-[1.03] active:scale-95 transition-[transform,box-shadow,opacity,width,background-color]"
              >
                {c.cta_btn} <ArrowRight size={18} strokeWidth={2.5} />
              </a>
              <p className="text-xs text-white/60 mt-4">{c.cta_note}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative bg-[#06111d] py-20 sm:py-28 px-5 overflow-hidden">
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-[#FF6600] font-bold text-sm tracking-widest uppercase mb-3">{c.faq_label}</p>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">{c.faq_title}</h2>
          </motion.div>
          <div className="space-y-3">
            {c.faqs.map(([q, a], i) => (
              <motion.div
                key={q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
              >
                <details className="group rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden">
                  <summary className="cursor-pointer p-5 flex items-center justify-between gap-4 font-bold text-sm text-white hover:bg-white/5 transition list-none">
                    <span>{q}</span>
                    <span className="text-[#FF6600] group-open:rotate-45 transition-transform text-xl leading-none shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-white/60 leading-[1.8]">{a}</div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
